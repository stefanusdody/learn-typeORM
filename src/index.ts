import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {Todo} from "./entity/Todo";

// inserting data
createConnection().then(async connection => {

    // console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

// create
    // const todo = new Todo();
    // todo.text = "learn React";
    //
    // await connection.manager.save(todo);
    // res.send()
    //
    // const todos = await connection.manager.find(Todo);
    // console.log("Loaded todos: ", todos);
// // //
// // // Create Repository and update
//    let todoRepository = connection.getRepository(Todo);
//    const todoToUpdate = await todoRepository.findOneById("5ad8584954cf8e1265bd4695");
//    todoToUpdate.text = "Updated"
//
//    await todoRepository.save(todoToUpdate);
//    console.log("after update");
//
//    const updateTodos = await connection.manager.find(Todo);
//    console.log("Loaded todos: ", updateTodos);
//
// // Delete
//    // let deleteRepository = connection.getRepository(Todo)
//    // const todoToRemove = await deleteRepository.findOneById("5ad96da2c630c906b6483b04");
//    //
//    // await deleteRepository.remove(todoToRemove);
//    // console.log("after delete");
//    //
//    // const deleteTodos = await connection.manager.find(Todo);
//    // console.log("Loaded todos: ", deleteTodos);

})
.catch(error => console.log(error));
