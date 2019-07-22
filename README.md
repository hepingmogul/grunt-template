# grunt
## 为何要用构建工具？
一句话：自动化。对于需要反复重复的任务，例如压缩（minification）、编译、单元测试、linting等，自动化工具可以减轻你的劳动，简化你的工作。当你在 Gruntfile 文件正确配置好了任务，任务运行器就会自动帮你或你的小组完成大部分无聊的工作。

## 为什么要使用 Grunt？
Grunt 生态系统非常庞大，并且一直在增长。由于拥有数量庞大的插件可供选择，因此，你可以利用 Grunt 自动完成任何事，并且花费最少的代价。如果找不到你所需要的插件，那就自己动手创造一个 Grunt 插件，然后将其发布到 npm 上吧。先看看[入门文档](https://www.gruntjs.net/getting-started)吧。

## 快速入门
- Grunt和 Grunt 插件是通过 npm 安装并管理的，npm是 Node.js 的包管理器。
- Grunt 0.4.x 必须配合 Node.js >= 0.8.0 版本使用。
- 在安装 Grunt 前，请确保当前环境中所安装的 npm 已经是最新版本，执行 npm update -g npm 指令进行升级（在某些系统中可能需要 sudo 指令）。
- 如果你已经安装了 Grunt，现在需要参考一些文档手册，那就请看一看 Gruntfile 实例 和如何 配置任务吧。

## 安装 CLI
- 还在使用 Grunt 0.3 版本吗？请查看 Grunt 0.3 注意事项
- 在继续学习前，你需要先将Grunt命令行（CLI）安装到全局环境中。安装时可能需要使用sudo（针对OSX、*nix、BSD等系统中）权限或者作为管理员（对于Windows环境）来执行以下命令。
  ```bash
  npm install -g grunt-cli
  ```
- 上述命令执行完后，`grunt` 命令就被加入到你的系统路径中了，以后就可以在任何目录下执行此命令了。
> 注意，安装`grunt-cli`并不等于安装了 Grunt！Grunt CLI的任务很简单：调用与`Gruntfile`在同一目录中 Grunt。这样带来的好处是，允许你在同一个系统上同时安装多个版本的 Grunt。
- 这样就能让多个版本的 Grunt 同时安装在同一台机器上

## CLI 是如何工作的
- 每次运行grunt 时，他就利用node提供的require()系统查找本地安装的 Grunt。正是由于这一机制，你可以在项目的任意子目录中运行grunt 。
- 如果找到一份本地安装的 Grunt，CLI就将其加载，并传递Gruntfile中的配置信息，然后执行你所指定的任务。为了更好的理解 Grunt CLI的执行原理，请[阅读源码](https://github.com/gruntjs/grunt-cli/blob/master/bin/grunt)。

## 拿一份现有的 Grunt 项目练手
- [项目案例](https://github.com/hepingmogul/grunt-template.git)
- 假定Grunt CLI已经正确安装，并且已经有一份配置好package.json 和 Gruntfile 文件的项目了，接下来就很容易拿Grunt练手了：
- 将命令行的当前目录转到项目的根目录下。
- 执行npm install命令安装项目依赖的库。
- 执行 grunt 命令。
- OK，就是这么简单。还可以通过grunt --help 命令列出所有已安装的Grunt任务（task），但是一般更建议去查看项目的文档以获取帮助信息。

## 备一份新的 Grunt 项目
- 一般需要在你的项目中添加两份文件：package.json 和 Gruntfile。
- package.json: 此文件被[npm](https://www.npmjs.com/)用于存储项目的元数据，以便将此项目发布为npm模块。你可以在此文件中列出项目依赖的grunt和Grunt插件，放置于[devDependencies](https://docs.npmjs.com/files/package.json#devdependencies)配置段内。
- Gruntfile: 此文件被命名为 `Gruntfile.js` 或 `Gruntfile.coffee`，用来配置或定义任务（task）并加载Grunt插件的。 此文档中提到的 `Gruntfile` 其实说的是一个文件，文件名是 `Gruntfile.js` 或 `Gruntfile.coffee`。

## package.json
- package.json应当放置于项目的根目录中，与Gruntfile在同一目录中，并且应该与项目的源代码一起被提交。在上述目录(package.json所在目录)中运行npm install将依据package.json文件中所列出的每个依赖来自动安装适当版本的依赖。
- 面列出了几种为你的项目创建package.json文件的方式：
  - 大部分 [grunt-init](https://www.gruntjs.net/project-scaffolding) 模版都会自动创建特定于项目的package.json文件。
  - [npm init](https://docs.npmjs.com/cli/init)命令会创建一个基本的package.json文件。
  - 复制下面的案例，并根据需要做扩充，参考此[说明](https://docs.npmjs.com/files/package.json).
  ```js
    {
      "name": "my-project-name",
      "version": "0.1.0",
      "devDependencies": {
        "grunt": "~0.4.5",
        "grunt-contrib-jshint": "~0.10.0",
        "grunt-contrib-nodeunit": "~0.4.1",
        "grunt-contrib-uglify": "~0.5.0"
      }
    }
  ```

## 安装Grunt 和 grunt插件
- 向已经存在的`package.json` 文件中添加Grunt和grunt插件的最简单方式是通过`npm install <module> --save-dev`命令。此命令不光安装了`<module>`，还会自动将其添加到[devDependencies](https://docs.npmjs.com/files/package.json#devdependencies) 配置段中，遵循tilde version range格式。
- 例如，下面这条命令将安装Grunt最新版本到项目目录中，并将其添加到devDependencies内：
  ```bash
  npm install grunt --save-dev
  ```
- 同样，grunt插件和其它node模块都可以按相同的方式安装。下面展示的实例就是安装 JSHint 任务模块：
  ```bash
  npm install grunt-contrib-jshint --save-dev
  ```
- 在 [Grunt 插件](https://gruntjs.com/plugins) 页面可以看到当前可用的 Grunt 插件，他们可以直接在项目中安装并使用。
- 安装插件之后，请务必确保将更新之后的 `package.json` 文件提交到项目仓库中。

## Gruntfile
- Gruntfile.js 或 Gruntfile.coffee 文件是有效的 JavaScript 或 CoffeeScript 文件，应当放在你的项目根目录中，和package.json文件在同一目录层级，并和项目源码一起加入源码管理器。
- Gruntfile由以下几部分构成：
  - "wrapper" 函数
  - 项目与任务配置
  - 加载grunt插件和任务
  - 自定义任务

## Gruntfile文件案例
- 在下面列出的这个 `Gruntfile` 中，`package.json`文件中的项目元数据（metadata）被导入到 Grunt 配置中， [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) 插件中的`uglify` 任务（task）被配置为压缩（minify）源码文件并依据上述元数据动态生成一个文件头注释。当在命令行中执行 `grunt` 命令时，`uglify` 任务将被默认执行。
  ```js
  module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
          src: 'src/<%= pkg.name %>.js',
          dest: 'build/<%= pkg.name %>.min.js'
        }
      }
    });
    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // 默认被执行的任务列表。
    grunt.registerTask('default', ['uglify']);
  };
  ```
- 前面已经向你展示了整个 Gruntfile，接下来将详细解释其中的每一部分。

## "wrapper" 函数
- 每一份 `Gruntfile` （和grunt插件）都遵循同样的格式，你所书写的Grunt代码必须放在此函数内：
  ```js
  module.exports = function(grunt) {
    // Do grunt-related things in here
  };
  ```

## 项目和任务配置
- 大部分的Grunt任务都依赖某些配置数据，这些数据被定义在一个object内，并传递给[grunt.initConfig](https://www.gruntjs.net/api/grunt#grunt.initconfig) 方法。

- 在下面的案例中，`grunt.file.readJSON('package.json')` 将存储在`package.json`文件中的JSON元数据引入到grunt config中。 由于`<% %>`模板字符串可以引用任意的配置属性，因此可以通过这种方式来指定诸如文件路径和文件列表类型的配置数据，从而减少一些重复的工作。

- 你可以在这个配置对象中(传递给initConfig()方法的对象)存储任意的数据，只要它不与你任务配置所需的属性冲突，否则会被忽略。此外，由于这本身就是JavaScript，你不仅限于使用JSON；你可以在这里使用任意的有效的JS代码。如果有必要，你甚至可以以编程的方式生成配置。

- 与大多数task一样，[grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)插件中的`uglify` 任务要求它的配置被指定在一个同名属性中。在这里有一个例子, 我们指定了一个`banner`选项(用于在文件顶部生成一个注释)，紧接着是一个单一的名为`build`的uglify目标，用于将一个js文件压缩为一个目标文件。
  ```js
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });
  ```

## 加载 Grunt 插件和任务
- 像 [concatenation](https://github.com/gruntjs/grunt-contrib-concat)、[minification]、[grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) 和 [linting](https://github.com/gruntjs/grunt-contrib-jshint)这些常用的任务（task）都已经以grunt插件的形式被开发出来了。只要在 `package.json` 文件中被列为dependency（依赖）的包，并通过`npm install`安装之后，都可以在`Gruntfile`中以简单命令的形式使用：
  ```js
  // 加载能够提供"uglify"任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  ```
> 注意： grunt --help 命令将列出所有可用的任务。

## 自定义任务
- 通过定义 default 任务，可以让Grunt默认执行一个或多个任务。在下面的这个案例中，执行 grunt 命令时如果不指定一个任务的话，将会执行uglify任务。这和执行grunt uglify 或者 grunt default的效果一样。default任务列表数组中可以指定任意数目的任务（可以带参数）。
  ```js
  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  ```
- 如果Grunt插件中的任务（task）不能满足你的项目需求，你还可以在Gruntfile中自定义任务（task）。例如，在下面的 Gruntfile 中自定义了一个default 任务，并且他甚至不依赖任务配置：
  ```js
  module.exports = function(grunt) {
    // A very basic default task.
    grunt.registerTask('default', 'Log some stuff.', function() {
      grunt.log.write('Logging some stuff...').ok();
    });
  };
  ```
- 特定于项目的任务不必在 Gruntfile 中定义。他们可以定义在外部.js 文件中，并通过grunt.loadTasks 方法加载。

## 扩展阅读
- The [Installing grunt](https://www.gruntjs.net/installing-grunt) guide has detailed information about installing specific, production or in-development, versions of Grunt and grunt-cli.
- The [Configuring Tasks](https://www.gruntjs.net/configuring-tasks) guide has an in-depth explanation on how to configure tasks, targets, options and files inside the Gruntfile, along with an explanation of templates, globbing patterns and importing external data.
- The [Creating Tasks](https://www.gruntjs.net/creating-tasks) guide lists the differences between the types of Grunt tasks and shows a number of sample tasks and configurations.
- For more information about writing custom tasks or Grunt plugins, check out the developer [documentation](https://www.gruntjs.net/api/grunt).