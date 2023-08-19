

docker run --hostname=134f8f191593 --env=PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin --env=NGINX_VERSION=1.25.1 --env=PKG_RELEASE=1 -p 8088:80 --label='maintainer=NGINX Docker Maintainers <docker-maint@nginx.com>' --runtime=runc -d docker/welcome-to-docker:latest

docker run
--hostname=c5428f12eef4
--user=mssql
--env=ACCEPT_EULA=1
--env=MSSQL_SA_PASSWORD=1qaz@WSX
--env=PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
--env=MSSQL_RPC_PORT=135
--env=CONFIG_EDGE_BUILD=1
--env=PAL_BOOT_WITH_MINIMAL_CONFIG=1
--env=PAL_ENABLE_PAGE_ALIGNED_PE_FILE_CREATION=1
--env=LD_LIBRARY_PATH=/opt/mssql/lib
--volume=/var/opt/mssql-extensibility
--volume=/var/opt/mssql-extensibility/data
--volume=/var/opt/mssql-extensibility/log
--cap-add=SYS_PTRACE -p 1433:1433
--restart=no
--label='com.azure.dev.image.build.sourceversion=b130fe86407fe3343c7a4e9c4947533a393ced60'
--label='com.azure.dev.image.system.teamfoundationcollectionuri=https://dev.azure.com/tigerdid/'
--label='com.microsoft.product=Microsoft SQL Server'
--label='com.microsoft.version=15.0.2000.1562'
--label='vendor=Microsoft'
--runtime=runc
-d mcr.microsoft.com/azure-sql-edge


sudo docker run \
--sig-proxy=false \
--name nextcloud-aio-mastercontainer \
--restart always \
--publish 80:80 \
--publish 8080:8080 \
--publish 8443:8443 \
--volume nextcloud_aio_mastercontainer:/mnt/docker-aio-config \
--volume /var/run/docker.sock:/var/run/docker.sock:ro \
--volume /backup:/var/nextcloud/ \
nextcloud/all-in-one:latest