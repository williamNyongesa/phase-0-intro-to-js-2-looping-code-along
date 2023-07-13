function writeCards(names) {
    let thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    thankYouMessages.push(message);
    }
    return thankYouMessages;
    }
    
    let names = ["will", "gin", "lyn"];
    console.log(writeCards(names));
   
    
    function countDown(number) {
        for (let i = number; i >= 0; i--) {
          console.log(i);
        }
      }
      
      module.exports = {
        
        
        countDown
      };
    
    
    
    
    