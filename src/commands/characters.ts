import {Command, flags} from '@oclif/command'
var figlet = require('figlet');
const chalk = require('chalk');

export default class Characters extends Command {
  static description = 'List of all characters'

  async run() {

    figlet('Game of thrones', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      console.log(data);
    });

    this.log(chalk.blue(`
    List of all the characters`))
    this.log(chalk.cyan(`
    Character Name  \tSuggested Search Parameter`));
    this.log(chalk.green(`
    Bronn	\tbronn
    Brynden Tully	brynden
    Cersei	\tcersei
    The Hound	\thound
    Jaime Lannister	jaime
    Littlefinger	littlefinger
    Olenna Tyrell	olenna
    Renly Baratheon	renly
    Tyrion	\ttyrion
    Varys	\tvarys
    `));
  }
}
