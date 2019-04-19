import {Command, flags} from '@oclif/command'
import axios from 'axios'
var figlet = require('figlet');
const chalk = require('chalk');

export default class Quote extends Command {
  static description = 'Popular Game of thrones quote of famious characters.'
  static args = [{name: 'character', required: false}]
  async run() {
    const {args} = this.parse(Quote)
    await axios.get(`https://got-quotes.herokuapp.com/quotes?char=${args.character}`)
        .then( data => {
            var quote = data.data;
            this.log('\n ' + chalk.blue.underline.bold(quote.character)+ ' : ' +chalk.blue(quote.quote) + '\n');
        })
        .catch(error => {
          this.log(chalk.red('\n ' + 'Something went wrong...' + '/n'))
        })

    function printQuote() {
      
    }
    figlet('Game of thrones', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      console.log(data);
    });
  }
}
