# Arquitetura



# MSSql on Docker

docker pull mcr.microsoft.com/azure-sql-edge:latest

docker run -d
  --name SqlServer
  -p 1433:1433
  -e ACCEPT_EULA=1
  -e MSSQL_SA_PASSWORD=1qaz@WSX
  -e MSSQL_PID=Developer
  mcr.microsoft.com/azure-sql-edge

docker ps -s

docker logs SqlServer

docker exec -it SqlServer mkdir "/var/opt/mssql/backup"

docker cp ~/Downloads/backup_oftalmo.bak SqlServer:/var/opt/mssql/backup/

RESTORE DATABASE OftalmoXPProducao
  FROM DISK = '/var/opt/mssql/backup/backup_oftalmo.bak'
  WITH REPLACE, RECOVERY,
  MOVE 'Oftalmo_2000_dat' TO '/var/opt/mssql/data/oftalmo.mdf',
  MOVE 'Oftalmo_2000_log'  TO '/var/opt/mssql/data/oftalmo.ldf';

docker cp ~/Downloads/backup_visiontech.bak SqlServer:/var/opt/mssql/backup/

RESTORE DATABASE Visiontech
  FROM DISK = '/var/opt/mssql/backup/backup_visiontech.bak'
  WITH REPLACE, RECOVERY,
  MOVE 'Visiontech_Data' TO '/var/opt/mssql/data/visiontech.mdf',
  MOVE 'Visiontech_Log'  TO '/var/opt/mssql/data/visiontech.ldf';

docker exec -it SqlServer bash

docker stop SqlServer
docker rm SqlServer
