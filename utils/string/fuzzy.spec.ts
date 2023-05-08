import { describe, expect, it } from "vitest";
import * as fuzzy from "./fuzzy";

describe("fuzzy", function () {
  describe(".test", function () {
    it("should return true when fuzzy match", function () {
      expect(fuzzy.match("back", "imaback")).toBeTruthy();
      expect(fuzzy.match("back", "bakck")).toBeTruthy();
      expect(fuzzy.match("shig", "osh kosh modkhigow")).toBeTruthy();
      expect(fuzzy.match("", "osh kosh modkhigow")).toBeTruthy();
    });
    it("should return false when no fuzzy match", function () {
      expect(fuzzy.match("back", "abck")).toBeFalsy();
      expect(fuzzy.match("okmgk", "osh kosh modkhigow")).toBeFalsy();
    });
  });
  describe(".simpleFilter", function () {
    it("should filter the elements of a string array", function () {
      expect(fuzzy.simpleFilter("a", ["a"])).toEqual(["a"]);
      expect(fuzzy.simpleFilter("ab", ["aba", "c", "cacb"])).toEqual([
        "aba",
        "cacb",
      ]);
    });
  });
  describe(".match", function () {
    it("should return the rendered string and match score", function () {
      const results = fuzzy.match("ab", "ZaZbZ", { pre: "<", post: ">" });
      expect(results?.rendered).toEqual("Z<a>Z<b>Z");
      expect(results).to.include.keys("score");
    });
    it("should not require a template, returning the string as is", function () {
      expect(fuzzy.match("ab", "ZaZbZ")?.rendered).to.equal("ZaZbZ");
    });
    it("should return null on no match", function () {
      expect(fuzzy.match("ZEBRA!", "ZaZbZ")).to.equal(null);
    });
    it("should return a greater score for consecutive matches of pattern", function () {
      const consecutiveScore = fuzzy.match("abcd", "zabcd")?.score;
      const scatteredScore = fuzzy.match("abcd", "azbcd")?.score || 0;
      expect(consecutiveScore).to.be.above(scatteredScore);
    });
    it("should be case insensitive by default", function () {
      expect(fuzzy.filter("a", ["A"])[0].rendered).to.equal("A");
    });
    it("should take an ignoreCase parameter", function () {
      const opts = { caseSensitive: true };
      expect(fuzzy.match("Ab", "aB", opts)).to.equal(null);
      opts.caseSensitive = false;
      expect(fuzzy.match("AB", "AB", opts)).to.not.equal(null);
    });
    it("should return the same score for matches in the middle as matches at beginning", function () {
      // TODO: Dont know how I feel about this. Sublime weights characters that
      // appear toward the beginning of the string a bit higher
    });
    // TODO: implement this test
    it("should prefer consecutive characters even if they come after the first match", function () {
      const opts = { pre: "<", post: ">" };
      const result = fuzzy.match("bass", "bodacious bass", opts)?.rendered;
      expect(result).to.equal("bodacious <bass>");
    });
    it("should prefer consecutive characters in a match even if we need to break up into a substring", function () {
      const opts = { pre: "<", post: ">" };
      const result = fuzzy.match("reic", "reactive rice", opts)?.rendered;
      expect(result).to.equal("<re>act<i>ve ri<c>e");
    });
  });
  describe(".filter", function () {
    it("should return an empty array when the array is empty", function () {
      const result = fuzzy.filter("pattern", []);
      expect(result).to.deep.equal([]);
    });
    it("should return the index and matching array elements", function () {
      const result = fuzzy.filter("ab", ["aba", "c", "cacb"]);
      expect(result).to.have.length(2);

      // verify first result
      expect(result[0].rendered).to.equal("aba");
      expect(result[0].index).to.equal(0);
      expect(result[0]).to.have.property("score");

      // verify second result
      expect(result[1].rendered).to.equal("cacb");
      expect(result[1].index).to.equal(2);
      expect(result[1]).to.have.property("score");
    });
    it("should use optional template stringing to wrap each element", function () {
      let rendered = fuzzy.filter("a", ["a"], {
        pre: "tah",
        post: "zah!",
      })[0].rendered;
      expect(rendered).to.equal("tahazah!");

      rendered = fuzzy.filter("ab", ["cacbc"], {
        pre: "<",
        post: ">",
      })[0].rendered;
      expect(rendered).to.eql("c<a>c<b>c");
    });

    it("should return list untouched when given empty pattern", function () {
      // array needs to be over size 10: V8 has stable sort with < 10 elements,
      // unstable with > 10 elements
      const arr = "abcdefghjklmnop".split("");
      const results = fuzzy.filter("", arr);
      expect(results).to.eql([
        {
          index: 0,
          original: "a",
          score: 0,
          rendered: "a",
        },
        {
          index: 1,
          original: "b",
          score: 0,
          rendered: "b",
        },
        {
          index: 2,
          original: "c",
          score: 0,
          rendered: "c",
        },
        {
          index: 3,
          original: "d",
          score: 0,
          rendered: "d",
        },
        {
          index: 4,
          original: "e",
          score: 0,
          rendered: "e",
        },
        {
          index: 5,
          original: "f",
          score: 0,
          rendered: "f",
        },
        {
          index: 6,
          original: "g",
          score: 0,
          rendered: "g",
        },
        {
          index: 7,
          original: "h",
          score: 0,
          rendered: "h",
        },
        {
          index: 8,
          original: "j",
          score: 0,
          rendered: "j",
        },
        {
          index: 9,
          original: "k",
          score: 0,
          rendered: "k",
        },
        {
          index: 10,
          original: "l",
          score: 0,
          rendered: "l",
        },
        {
          index: 11,
          original: "m",
          score: 0,
          rendered: "m",
        },
        {
          index: 12,
          original: "n",
          score: 0,
          rendered: "n",
        },
        {
          index: 13,
          original: "o",
          score: 0,
          rendered: "o",
        },
        {
          index: 14,
          original: "p",
          score: 0,
          rendered: "p",
        },
      ]);
    });
    it("should weight exact matches the highest", function () {
      // array needs to be over size 10: V8 has stable sort with < 10 elements,
      // unstable with > 10 elements
      const searchString = "go";
      let arr = "abcdefghjklmnop".split("");
      arr = arr.map(function (item) {
        return item + "oo";
      });
      arr = arr.concat(["good", "go", "goofgo", "ogo"]);
      const results = fuzzy.filter(searchString, arr);
      expect(results[0]).to.eql({
        index: 16,
        original: "go",
        score: Infinity,
        rendered: "go",
      });
    });
  });
});
