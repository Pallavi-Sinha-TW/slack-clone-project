function viewChannels() {
    let myChannels = document.getElementById("channelNames")
    let displaySetting = myChannels.style.display;
    let channelCaret = document.getElementById("channelCaret");
    if (displaySetting == "none"){
      myChannels.setAttribute("style", "display: block")
      channelCaret.setAttribute("class" , "fas fa-sort-up")
    }
    else{
      myChannels.setAttribute("style", "display : none")
      channelCaret.setAttribute("class" , "fas fa-sort-down")
    }
  }

  function viewUsers(){
    let users = document.getElementById("users")
    let displaySetting = users.style.display;
    let usersCaret = document.getElementById("usersCaret");
    if (displaySetting == "none"){
      users.setAttribute("style", "display: block")
      usersCaret.setAttribute("class" , "fas fa-sort-up")
    }
    else{
      users.setAttribute("style", "display : none")
      usersCaret.setAttribute("class" , "fas fa-sort-down")
    }
  }

  function redirectToAddChannel(){
    window.location.href = "addChannel.html"
  }

  function addChannel(){
    const link = document.createElement("a");
    const listItem = document.createElement("li");
    const newChannelName = document.getElementById("userInput").value;
    
    link.href = "#";
    link.innerHTML = newChannelName;
    link.className = "fas fa-hashtag"
    listItem.appendChild(link);

    const channelList = document.getElementById("channelNames");

    channelList.appendChild(listItem);

  }
  