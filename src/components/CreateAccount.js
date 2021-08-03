import React, { useState } from "react"

function CreateAccount () {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
   
    const handleSubmit = (e) => { 
        e.preventDefault()
        const newAccount = {firstName , lastName , username, password};
        console.log(newAccount)
     }



    return (
        <div>
              <form onSubmit={handleSubmit} className="new-account">
                <h2> Time to create your account!</h2>
                    <label> 
                <input id="name" placeholder="First Name" type="text" value={firstName} name="name" onChange={(e) => setFirstName(e.target.value)}/>
                    </label>
                <br></br>
                    <label> 
                <input id="last-name"placeholder="Last Name" type="text" value={lastName} name="name" onChange={(e) => setLastName(e.target.value)} />
                    </label>
                    <label> 
                        <input id="username"placeholder="Username" value={username} type="text" onChange={(e) => setUsername(e.target.value)}/>
                    </label>
                    <label>
                    <input id="password"placeholder="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <input type="submit" value="Create your new account!" />
            </form>
        </div>
    )
}

export default CreateAccount








/* function NewPoemForm() {
 const [title, setTitle] = useState("")
 const [author, setAuthor] = useState("")
 const [text, setText] = useState("")

const handleSubmit = (e) => {
  e.preventDefault()
  const newPoem = {title , author , text};

    fetch("http://localhost:8004/poems" , {
      method: "POST" , 
      headers: {"Content-Type" : "application/json"}, 
      body: JSON.stringify(newPoem)
    })

}


  return (
    <form  onSubmit={handleSubmit}className="new-poem-form">
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
      <textarea placeholder="Write your masterpiece here..." rows={10} value={text} onChange={(e) => setText(e.target.value)}/>
      <input type="submit" value="Share your masterpiece"  />
    </form>
  );
}

export default NewPoemForm; */