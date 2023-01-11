const form = document.addItem;
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    //console.log('submit works');
    //alert("it's working");
    
    //Now I am making sure that the input clears once it is submitted, and the below is working. I can submit by clicking the button or by hitting enter on my keyboard. 
    const item = form.title.value;
    form.title.value = "";
    console.log(item); //when I am trying this console log, it is recognizing the object HTMLInput Element but it is not logging the actual value, I am not sure why. **I found out why, i needed to log the actual variable, not the title/form. 

    const li = document.createElement('li');
    const paragraph = document.createElement('p');
     paragraph.textContent = item;
    li.append(paragraph);

    // delete button
         // create the delete btn 
    const delete1 = document.createElement('button');
        // display the delete button 
    li.append(delete1);
    delete1.textContent = "X";
        // add action to delete button
    delete1.addEventListener('click', (e)=>{
        //console.log('button clicked');
        li.remove()
    })  
        // create edit btn 
    const editBtn = document.createElement('button');
        // display the edit btn 
    li.append(editBtn);
    editBtn.textContent = "edit"
        // add event listener to edit btn
    editBtn.addEventListener('click', (e)=>{
       //console.log('edit clicked');
            // create an input field to store the edit
        const editItm = document.createElement('input');
            // display the input field 
            li.append(editItm);
            editItm.textContent = "new input";
            // create a submit button 
            const submitNew = document.createElement('button');
             // display the submit button
            li.append(submitNew);
            submitNew.textContent = "save";
             // add event to the submit btn 
            submitNew.addEventListener('click', (e)=>{
                //console.log('save clicked')
            // set the paragraph text to the new text // looks like example: paragraph.textContent= editInputField.value
            paragraph.textContent= editItm.value   
            // removethe new input field
            editItm.remove()
            // remove the new submit button
            submitNew.remove()
            })
    })                
     document.getElementById('list').append(li)
})

 /*
        <li> 
            <p>TEXT</p>
        </li>
     */