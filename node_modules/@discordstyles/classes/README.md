# DiscordClasses

A SCSS helper function to select classes without any hardcoded values

> ###### ⚠️ This is still in early development, expect things to change.

## Installation

```bash
npm install @discordstyles/classes
# or
pnpm add @discordstyles/classes
# or
yarn add @discordstyles/classes
```

<br>

## Usage

```scss
@use '@discordstyles/classes' as *; // We import as global so no need to do classes.cls().

#{cls('chat.container')} {
	color: red;
}
```

<br>

## Query selectors

### Deeper (`.`)

This allows you to access a deeper level of the class map.

```scss
#{cls('sidebar.channels.category.name')}
// .name-3BUDLf
```

<br>

### Combine (`:`)

Combine two selectors together to increase specificity, much like regular css.

```scss
#{cls('sidebar.channel.wrapper:sidebar.channel.muted')}
// .wrapper-NhbLHG.modeMuted-2T4MDZ
```

<br>

### Not (`!`)

Like a regular `:not` css selector.

```scss
#{cls('sidebar.channel.wrapper!sidebar.channel.selected')}
// .wrapper-NhbLHG:not(.modeSelected-3DmyhH)
```

You can also group multiple inside the not selector with a pipe (`|`).

```scss
#{cls('sidebar.channel.wrapper!sidebar.channel.selected|sidebar.channel.muted')}
// .wrapper-NhbLHG:not(.modeSelected-3DmyhH, .modeUnread-3Cxepe)
```

If need be, you can also start the query with a `!`.

```scss
#{cls('sidebar.channel.wrapper')} {
	&#{cls('!sidebar.channel.selected')} {
		color: red;
	}
}
// .wrapper-NhbLHG:not(.modeSelected-3DmyhH)
```

> **NOTE**: Any selector after the `!` will be wrapped inside the `:not` aside from a comma (`,`).

<br>

### Group selector (`,`)

```scss
#{cls('mount app.layers,sidebar.container')}
// #app-mount .layers-OrUESM, .container-1NXEtd
```

<br>

### Descendant selector (` `)

```scss
#{cls('sidebar.container sidebar.channel.wrapper!sidebar.channel.selected,sidebar.channel.muted')}
// .container-1NXEtd .wrapper-NhbLHG:not(.modeSelected-3DmyhH, .modeUnread-3Cxepe)
```

<br>

### Direct descandant selector (`>`)

```scss
#{cls('mount>sidebar.container>sidebar.channel.wrapper')}
// #app-mount > .container-1NXEtd > .wrapper-NhbLHG
```

<br>

### Sibling selector (`~`)

```scss
#{cls('mount~sidebar.container')}
// #app-mount ~ .container-1NXEtd
```

<br>

### Direct sibling selector (`+`)

```scss
#{cls('mount+sidebar.container')}
// #app-mount + .container-1NXEtd
```

<br>

## Limitations

Since there's no good way to determine what string has been parsed or not, combining `+`, `~`, and `>` will result in an error.  
You'll have the separate the params into two separate queries and use a regular CSS selector.

```scss
#{cls('mount>app.layer')} ~ #{cls('app.baseLayer')}
// #app-mount > .layer-86YKbF ~ baseLayer-W6S8cY
```
