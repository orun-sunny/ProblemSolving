const addTwoNumbers = function(l1, l2) {
    while (l1 || l2){
        let l1Value = l1 ? l1.val : 0




        if (l1){
            l1 = l1.next
        }
        if (l2){
            l2 = l2.next
        }
        console.log (l1);
    }
    
};