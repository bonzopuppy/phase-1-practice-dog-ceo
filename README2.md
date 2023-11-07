Start
  On Page Load
    Perform GET request to fetch dog images
    If request is successful then
      For each image URL in response
        Create an IMG element with the image URL
        Append the IMG element to the dog image container in the DOM

    Perform GET request to fetch dog breeds
    If request is successful then
      Initialize an allBreeds array
      For each breed in response
        If breed has sub-breeds then
          For each sub-breed
            Add the sub-breed to allBreeds array
            Create an LI element with sub-breed name
            Append the LI element to the breeds list in the DOM
        Else
          Add the breed to allBreeds array
          Create an LI element with breed name
          Append the LI element to the breeds list in the DOM

  Define a function to change the color of a clicked list item
    When an LI element is clicked
      Change the font color of the clicked LI element

  Add Click Event Listener to breeds list
    Call the function to change the color of a clicked list item

  Define a function to filter breeds by a selected letter
    When a letter is selected from the dropdown
      Filter the allBreeds array for breeds starting with the selected letter
      Clear the breeds list in the DOM
      For each breed in the filtered array
        Create an LI element with the breed name
        Append the LI element to the breeds list in the DOM

  Add Change Event Listener to breed dropdown
    Call the function to filter breeds by a selected letter

End


