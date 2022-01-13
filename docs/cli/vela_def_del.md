---
title: vela def del
---

Delete X-Definition.

### Synopsis

Delete X-Definition in kubernetes cluster.

```
vela def del DEFINITION_NAME [flags]
```

### Examples

```
# Command below will delete TraitDefinition of annotations in default namespace
> vela def del annotations -t trait -n default
```

### Options

```
  -h, --help               help for del
  -n, --namespace string   Specify which namespace the definition locates.
  -t, --type string        Specify the definition type of target. Valid types: workload, scope, workflow-step, component, trait, policy
```

### SEE ALSO

* [vela def](vela_def)	 - Manage Definitions

#### Go Back to [CLI Commands](vela) Homepage.


###### Auto generated by spf13/cobra on 12-Jan-2022, refer to [script in KubeVela](https://github.com/oam-dev/kubevela/tree/master/hack/docgen).