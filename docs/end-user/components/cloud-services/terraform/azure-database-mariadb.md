---
title:  Azure DATABASE-MARIADB
---

## Description

Terraform configuration for Azure Database Mariadb

## Samples

```yaml
apiVersion: core.oam.dev/v1beta1
kind: Application
metadata:
  name: mariadb-backend
spec:
  components:
    - name: mariadb-backend
      type: azure-database-mariadb
      properties:
        resource_group: "kubevela-group"
        location: "West Europe"
        server_name: "kubevela"
        db_name: "backend"
        username: "acctestun"
        password: "H@Sh1CoR3!Faked"
        writeConnectionSecretToRef:
          name: azure-db-conn
          namespace: vela-system
```

## Specification


### Properties

 Name | Description | Type | Required | Default 
 ------------ | ------------- | ------------- | ------------- | ------------- 
 db_name | Database instance name | string | true |  
 username | Database instance username | string | true |  
 password | Database instance password | string | true |  
 location | Azure location | string | true |  
 resource_group | Resource group | string | true |  
 server_name | mariadb server name | string | true |  
 writeConnectionSecretToRef | The secret which the cloud resource connection will be written to | [writeConnectionSecretToRef](#writeConnectionSecretToRef) | false |  


#### writeConnectionSecretToRef

 Name | Description | Type | Required | Default 
 ------------ | ------------- | ------------- | ------------- | ------------- 
 name | The secret name which the cloud resource connection will be written to | string | true |  
 namespace | The secret namespace which the cloud resource connection will be written to | string | false |  


### Outputs

If `writeConnectionSecretToRef` is set, a secret will be generated with these keys as below:

 Name | Description 
 ------------ | ------------- 
 DB_USER | Database instance username
 DB_PASSWORD | Database instance password
 DB_PORT | Database instance port
 DB_HOST | Database instance host
 SERVER_NAME | mariadb server name
 DB_NAME | Database instance name
