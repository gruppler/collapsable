# Usage
### Include:
```
<link href="collapsable.css" rel="stylesheet" />
<script src="collapsable.jquery.js" type="text/javascript"></script>
```

### Initialize:
```
$('div.lotsoftext').collapsable({ maxHeight: '4.5em' });
```

### Default options:
```
{
  maxHeight: '10em',
  transitions: true,
  onChange: function(){}
}
```

### Events:
```
$('div.collapsable').on('collapse', function(){});
$('div.collapsable').on('uncollapse', function(){});
```
