# Baidu Analytics tracking for GitBook

[![Dependency Status](https://david-dm.org/poppinlp/gitbook-plugin-baidu.svg)](https://david-dm.org/poppinlp/gitbook-plugin-baidu)
[![devDependency Status](https://david-dm.org/poppinlp/gitbook-plugin-baidu/dev-status.svg)](https://david-dm.org/poppinlp/gitbook-plugin-baidu#info=devDependencies)

A gitbook plugin to add Baidu Analytics for your book

### Install Plugin

Install with this command:

```shell
npm install gitbook-plugin-baidu
```

### Use Plugin

First you should have a Baidu Analytics token, looks like `c12134efe8099063bacebecb25df3b7d`.

Then add this plugin to your book.json config:

```
{
    "plugin": ["baidu"]
}
```

Then add your token to `pluginsConfig`:

```
{
    "plugin": ["baidu"],
    "pluginsConfig": {
        "baidu": {
            "token": "YOUR TOKEN"
        }
    }
}
```

Finally build your book with gitbook again and you'll get what you want.

### History

- Ver 0.0.1 init
