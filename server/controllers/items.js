import Item from '../models/item.js'

export const getItems = async (req, res) => {

  const id = req.user._id;
  
  try {
    
    const items = await Item.find({id});
    res.status(200).json(items);

  } catch (error) {
    console.log(error.message)
  }

}

export const getItemById = async (req, res) => {
  
  try {
    const {id} = (req.params);
    const item = await Item.findById(id);
    res.status(200).json(item);

  } catch (error) {
    console.log(error.message);
  }

}

export const createItem = async (req, res) => {
  console.log(req.user);
  const item = req.body;
  const newItem = new Item(item);

  try {

    await newItem.save();
    res.status(200).json(newItem);

  } catch (error) {

    console.log(error.message)

  }

}

export const updateItem = async (req, res) => {

  //In questo tipo di destrutturazione assegnamo ad _id il valore di id
  const { id: _id } = req.params;
  const item = req.body;
  //***** AGGIUNGERE CONTROLLO SU ID -> MONGODB
  
  try {

    const updatedItem = await Item.findOneAndUpdate(_id, item, {new: true});

    res.json(updatedItem);
    
  } catch (error) {
    
      console.log(error.message);

  }
}

export const deleteItem = async (req, res) => {
  
  try {
  
    const { id } = req.params;
    await Item.findByIdAndRemove(id);
    res.json({message: "Item deleted successfully"});
    
  } catch (error) {

      console.log(error.message);

  }
  
}
