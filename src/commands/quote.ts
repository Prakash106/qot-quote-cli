import {Command, flags} from '@oclif/command'
import axios from 'axios'

const chalk = require('chalk');

export default class Quote extends Command {
  static description = 'show the github stars on a repository'
  static args = [{name: 'character', required: false}]
  async run() {
    const {args} = this.parse(Quote)
    const {data: response} = await axios.get(`https://got-quotes.herokuapp.com/quotes?char=${args.character}`)
    var quote = response;
    this.log('\n' + chalk.blue.underline.bold(quote.character)+ ' : ' +chalk.blue(quote.quote) + '\n');
  }
}
