const readline = require('readline-sync')
function start() 
{
    const content =  {}

    content.seachTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm()
    {
        return readline.question('Type a Wikipedia seach term: ')
    }
    function askAndReturnPrefix() 
    {
        const prefixes = ['Who is', 'Waht is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one question: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        
        return selectedPrefixText
    }
    console.log(content)

}

start()