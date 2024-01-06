import { cn } from "@/client/lib/cn.js";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { ReactNode } from "react";

// https://uicolors.app/create
const colors = {
  // #d1d5db
  default: {
    white: {
      solid: {
        default: "bg-gray-500 text-white",
        hover: "hover:bg-gray-600 hover:text-white",
        focus: "focus:bg-gray-700 focus:text-white",
        disabled: "bg-gray-200/50 text-gray-700/50",
      },
      outline: {
        default: "bg-white text-gray-700 border-gray-700",
        hover: "hover:bg-gray-50 hover:text-gray-700 border-gray-700",
        focus: "focus:bg-gray-100 focus:text-gray-700 border-gray-700",
        disabled: "bg-white text-gray-700/50 border-gray-700/50",
      },
    },
    dark: {
      solid: {
        default: "dark:bg-gray-400 dark:text-gray-950",
        hover: "dark:hover:bg-gray-300 dark:hover:text-gray-950",
        focus: "dark:focus:bg-gray-500 dark:focus:text-gray-950",
        disabled: "dark:bg-gray-800/50 dark:text-gray-100/50",
      },
      outline: {
        default: "dark:bg-transparent dark:text-gray-300 dark:border-gray-300",
        hover:
          "dark:hover:bg-gray-950 dark:hover:text-gray-300 dark:border-gray-300",
        focus:
          "dark:focus:bg-gray-900 dark:focus:text-gray-300 dark:border-gray-300",
        disabled:
          "dark:bg-transparent dark:text-gray-300/50 dark:border-gray-300/50",
      },
    },
  },
  // #3b82f6
  primary: {
    white: {
      solid: {
        default: "bg-blue-500 text-white",
        hover: "hover:bg-blue-600 hover:text-white",
        focus: "focus:bg-blue-700 focus:text-white",
        disabled: "bg-blue-200/50 text-blue-700/50",
      },
      outline: {
        default: "bg-white text-blue-700 border-blue-700",
        hover: "hover:bg-blue-50 hover:text-blue-700 border-blue-700",
        focus: "focus:bg-blue-100 focus:text-blue-700 border-blue-700",
        disabled: "bg-white text-blue-700/50 border-blue-700/50",
      },
    },
    dark: {
      solid: {
        default: "dark:bg-blue-400 dark:text-blue-950",
        hover: "dark:hover:bg-blue-300 dark:hover:text-blue-950",
        focus: "dark:focus:bg-blue-500 dark:focus:text-blue-950",
        disabled: "dark:bg-blue-800/50 dark:text-blue-100/50",
      },
      outline: {
        default: "dark:bg-transparent dark:text-blue-300 dark:border-blue-300",
        hover:
          "dark:hover:bg-blue-950 dark:hover:text-blue-300 dark:border-blue-300",
        focus:
          "dark:focus:bg-blue-900 dark:focus:text-blue-300 dark:border-blue-300",
        disabled:
          "dark:bg-transparent dark:text-blue-300/50 dark:border-blue-300/50",
      },
    },
  },
  // #22c55e
  success: {
    white: {
      solid: {
        default: "bg-green-500 text-white",
        hover: "hover:bg-green-600 hover:text-white",
        focus: "focus:bg-green-700 focus:text-white",
        disabled: "bg-green-200/50 text-green-700/50",
      },
      outline: {
        default: "bg-white text-green-700 border-green-700",
        hover: "hover:bg-green-50 hover:text-green-700 border-green-700",
        focus: "focus:bg-green-100 focus:text-green-700 border-green-700",
        disabled: "bg-white text-green-700/50 border-green-700/50",
      },
    },
    dark: {
      solid: {
        default: "dark:bg-green-400 dark:text-green-950",
        hover: "dark:hover:bg-green-300 dark:hover:text-green-950",
        focus: "dark:focus:bg-green-500 dark:focus:text-green-950",
        disabled: "dark:bg-green-800/50 dark:text-green-100/50",
      },
      outline: {
        default:
          "dark:bg-transparent dark:text-green-300 dark:border-green-300",
        hover:
          "dark:hover:bg-green-950 dark:hover:text-green-300 dark:border-green-300",
        focus:
          "dark:focus:bg-green-900 dark:focus:text-green-300 dark:border-green-300",
        disabled:
          "dark:bg-transparent dark:text-green-300/50 dark:border-green-300/50",
      },
    },
  },
  // #06b6d4
  info: {
    white: {
      solid: {
        default: "bg-cyan-500 text-white",
        hover: "hover:bg-cyan-600 hover:text-white",
        focus: "focus:bg-cyan-700 focus:text-white",
        disabled: "bg-cyan-200/50 text-cyan-700/50",
      },
      outline: {
        default: "bg-white text-cyan-700 border-cyan-700",
        hover: "hover:bg-cyan-50 hover:text-cyan-700 border-cyan-700",
        focus: "focus:bg-cyan-100 focus:text-cyan-700 border-cyan-700",
        disabled: "bg-white text-cyan-700/50 border-cyan-700/50",
      },
    },
    dark: {
      solid: {
        default: "dark:bg-cyan-400 dark:text-cyan-950",
        hover: "dark:hover:bg-cyan-300 dark:hover:text-cyan-950",
        focus: "dark:focus:bg-cyan-500 dark:focus:text-cyan-950",
        disabled: "dark:bg-cyan-800/50 dark:text-cyan-100/50",
      },
      outline: {
        default: "dark:bg-transparent dark:text-cyan-300 dark:border-cyan-300",
        hover:
          "dark:hover:bg-cyan-950 dark:hover:text-cyan-300 dark:border-cyan-300",
        focus:
          "dark:focus:bg-cyan-900 dark:focus:text-cyan-300 dark:border-cyan-300",
        disabled:
          "dark:bg-transparent dark:text-cyan-300/50 dark:border-cyan-300/50",
      },
    },
  },
  // #eab308
  warning: {
    white: {
      solid: {
        default: "bg-yellow-500 text-white",
        hover: "hover:bg-yellow-600 hover:text-white",
        focus: "focus:bg-yellow-700 focus:text-white",
        disabled: "bg-yellow-200/50 text-yellow-700/50",
      },
      outline: {
        default: "bg-white text-yellow-700 border-yellow-700",
        hover: "hover:bg-yellow-50 hover:text-yellow-700 border-yellow-700",
        focus: "focus:bg-yellow-100 focus:text-yellow-700 border-yellow-700",
        disabled: "bg-white text-yellow-700/50 border-yellow-700/50",
      },
    },
    dark: {
      solid: {
        default: "dark:bg-yellow-400 dark:text-yellow-950",
        hover: "dark:hover:bg-yellow-300 dark:hover:text-yellow-950",
        focus: "dark:focus:bg-yellow-500 dark:focus:text-yellow-950",
        disabled: "dark:bg-yellow-800/50 dark:text-yellow-100/50",
      },
      outline: {
        default:
          "dark:bg-transparent dark:text-yellow-300 dark:border-yellow-300",
        hover:
          "dark:hover:bg-yellow-950 dark:hover:text-yellow-300 dark:border-yellow-300",
        focus:
          "dark:focus:bg-yellow-900 dark:focus:text-yellow-300 dark:border-yellow-300",
        disabled:
          "dark:bg-transparent dark:text-yellow-300/50 dark:border-yellow-300/50",
      },
    },
  },
  // #ef4444
  danger: {
    white: {
      solid: {
        default: "bg-red-500 text-white",
        hover: "hover:bg-red-600 hover:text-white",
        focus: "focus:bg-red-700 focus:text-white",
        disabled: "bg-red-200/50 text-red-700/50",
      },
      outline: {
        default: "bg-white text-red-700 border-red-700",
        hover: "hover:bg-red-50 hover:text-red-700 border-red-700",
        focus: "focus:bg-red-100 focus:text-red-700 border-red-700",
        disabled: "bg-white text-red-700/50 border-red-700/50",
      },
    },
    dark: {
      solid: {
        default: "dark:bg-red-400 dark:text-red-950",
        hover: "dark:hover:bg-red-300 dark:hover:text-red-950",
        focus: "dark:focus:bg-red-500 dark:focus:text-red-950",
        disabled: "dark:bg-red-800/50 dark:text-red-100/50",
      },
      outline: {
        default: "dark:bg-transparent dark:text-red-300 dark:border-red-300",
        hover:
          "dark:hover:bg-red-950 dark:hover:text-red-300 dark:border-red-300",
        focus:
          "dark:focus:bg-red-900 dark:focus:text-red-300 dark:border-red-300",
        disabled:
          "dark:bg-transparent dark:text-red-300/50 dark:border-red-300/50",
      },
    },
  },
};

const cvaButton = cva(
  "focus:ring-2 font-medium rounded-lg text-sm focus:outline-none",
  {
    variants: {
      size: {
        xs: "px-3 py-1.5 text-xs",
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-base",
        xl: "px-6 py-3.5 text-lg",
      },
      outline: { true: "border", false: "" },
      disabled: { true: "cursor-not-allowed", false: "" },
      color: {
        default: [],
        primary: [],
        success: [],
        info: [],
        warning: [],
        danger: [],
        link: "bg-transparent text-blue-600 border-0 hover:underline",
        ghost: "bg-transparent text-gray-600 dark:text-gray-300 border-0",
      },
    },
    compoundVariants: [
      // default solid
      {
        color: "default",
        outline: false,
        disabled: false,
        class: [
          colors.default.white.solid.default,
          colors.default.white.solid.focus,
          colors.default.white.solid.hover,
          colors.default.dark.solid.default,
          colors.default.dark.solid.focus,
          colors.default.dark.solid.hover,
        ],
      },
      // default outline
      {
        color: "default",
        outline: true,
        disabled: false,
        class: [
          colors.default.white.outline.default,
          colors.default.white.outline.focus,
          colors.default.white.outline.hover,
          colors.default.dark.outline.default,
          colors.default.dark.outline.focus,
          colors.default.dark.outline.hover,
        ],
      },
      // default solid disabled
      {
        color: "default",
        disabled: true,
        class: [
          colors.default.white.solid.disabled,
          colors.default.dark.solid.disabled,
        ],
      },
      // default outline disabled
      {
        color: "default",
        disabled: true,
        outline: true,
        class: [
          colors.default.white.outline.disabled,
          colors.default.dark.outline.disabled,
        ],
      },
      // primary solid
      {
        color: "primary",
        outline: false,
        disabled: false,
        class: [
          colors.primary.white.solid.default,
          colors.primary.white.solid.focus,
          colors.primary.white.solid.hover,
          colors.primary.dark.solid.default,
          colors.primary.dark.solid.focus,
          colors.primary.dark.solid.hover,
        ],
      },
      // primary outline
      {
        color: "primary",
        outline: true,
        disabled: false,
        class: [
          colors.primary.white.outline.default,
          colors.primary.white.outline.focus,
          colors.primary.white.outline.hover,
          colors.primary.dark.outline.default,
          colors.primary.dark.outline.focus,
          colors.primary.dark.outline.hover,
        ],
      },
      // primary solid disabled
      {
        color: "primary",
        disabled: true,
        class: [
          colors.primary.white.solid.disabled,
          colors.primary.dark.solid.disabled,
        ],
      },
      // primary outline disabled
      {
        color: "primary",
        disabled: true,
        outline: true,
        class: [
          colors.primary.white.outline.disabled,
          colors.primary.dark.outline.disabled,
        ],
      },
      // success solid
      {
        color: "success",
        outline: false,
        disabled: false,
        class: [
          colors.success.white.solid.default,
          colors.success.white.solid.focus,
          colors.success.white.solid.hover,
          colors.success.dark.solid.default,
          colors.success.dark.solid.focus,
          colors.success.dark.solid.hover,
        ],
      },
      // success outline
      {
        color: "success",
        outline: true,
        disabled: false,
        class: [
          colors.success.white.outline.default,
          colors.success.white.outline.focus,
          colors.success.white.outline.hover,
          colors.success.dark.outline.default,
          colors.success.dark.outline.focus,
          colors.success.dark.outline.hover,
        ],
      },
      // success solid disabled
      {
        color: "success",
        disabled: true,
        class: [
          colors.success.white.solid.disabled,
          colors.success.dark.solid.disabled,
        ],
      },
      // success outline disabled
      {
        color: "success",
        disabled: true,
        outline: true,
        class: [
          colors.success.white.outline.disabled,
          colors.success.dark.outline.disabled,
        ],
      },
      // info solid
      {
        color: "info",
        outline: false,
        disabled: false,
        class: [
          colors.info.white.solid.default,
          colors.info.white.solid.focus,
          colors.info.white.solid.hover,
          colors.info.dark.solid.default,
          colors.info.dark.solid.focus,
          colors.info.dark.solid.hover,
        ],
      },
      // info outline
      {
        color: "info",
        outline: true,
        disabled: false,
        class: [
          colors.info.white.outline.default,
          colors.info.white.outline.focus,
          colors.info.white.outline.hover,
          colors.info.dark.outline.default,
          colors.info.dark.outline.focus,
          colors.info.dark.outline.hover,
        ],
      },
      // info solid disabled
      {
        color: "info",
        disabled: true,
        class: [
          colors.info.white.solid.disabled,
          colors.info.dark.solid.disabled,
        ],
      },
      // info outline disabled
      {
        color: "info",
        disabled: true,
        outline: true,
        class: [
          colors.info.white.outline.disabled,
          colors.info.dark.outline.disabled,
        ],
      },
      // warning solid
      {
        color: "warning",
        outline: false,
        disabled: false,
        class: [
          colors.warning.white.solid.default,
          colors.warning.white.solid.focus,
          colors.warning.white.solid.hover,
          colors.warning.dark.solid.default,
          colors.warning.dark.solid.focus,
          colors.warning.dark.solid.hover,
        ],
      },
      // warning outline
      {
        color: "warning",
        outline: true,
        disabled: false,
        class: [
          colors.warning.white.outline.default,
          colors.warning.white.outline.focus,
          colors.warning.white.outline.hover,
          colors.warning.dark.outline.default,
          colors.warning.dark.outline.focus,
          colors.warning.dark.outline.hover,
        ],
      },
      // warning solid disabled
      {
        color: "warning",
        disabled: true,
        class: [
          colors.warning.white.solid.disabled,
          colors.warning.dark.solid.disabled,
        ],
      },
      // warning outline disabled
      {
        color: "warning",
        disabled: true,
        outline: true,
        class: [
          colors.warning.white.outline.disabled,
          colors.warning.dark.outline.disabled,
        ],
      },
      // danger solid
      {
        color: "danger",
        outline: false,
        disabled: false,
        class: [
          colors.danger.white.solid.default,
          colors.danger.white.solid.focus,
          colors.danger.white.solid.hover,
          colors.danger.dark.solid.default,
          colors.danger.dark.solid.focus,
          colors.danger.dark.solid.hover,
        ],
      },
      // danger outline
      {
        color: "danger",
        outline: true,
        disabled: false,
        class: [
          colors.danger.white.outline.default,
          colors.danger.white.outline.focus,
          colors.danger.white.outline.hover,
          colors.danger.dark.outline.default,
          colors.danger.dark.outline.focus,
          colors.danger.dark.outline.hover,
        ],
      },
      // danger solid disabled
      {
        color: "danger",
        disabled: true,
        class: [
          colors.danger.white.solid.disabled,
          colors.danger.dark.solid.disabled,
        ],
      },
      // danger outline disabled
      {
        color: "danger",
        disabled: true,
        outline: true,
        class: [
          colors.danger.white.outline.disabled,
          colors.danger.dark.outline.disabled,
        ],
      },
      // link outline disabled
      {
        color: "link",
        outline: true,
        disabled: true,
        class: "text-blue-600/50 border-0",
      },
      // link  disabled
      {
        color: "link",
        outline: false,
        disabled: true,
        class: "text-blue-600/50 border-0",
      },
      // ghost outline disabled
      {
        color: "link",
        outline: true,
        disabled: true,
        class: "text-gray-600/50 border-0",
      },
      // ghost  disabled
      {
        color: "link",
        outline: false,
        disabled: true,
        class: "text-gray-600/50 border-0",
      },
    ],
    defaultVariants: {
      size: "md",
      color: "default",
      outline: false,
      disabled: false,
    },
  },
);

export type CvaButtonProps = VariantProps<typeof cvaButton>;

export type TButtonProps = CvaButtonProps & {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  onClick,
  disabled,
  size,
  color,
  className,
  outline,
}: TButtonProps) {
  return (
    <button
      type="button"
      className={cn(cvaButton({ size, outline, color, disabled }), className)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
