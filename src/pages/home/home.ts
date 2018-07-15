import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray,  ToastController} from 'ionic-angular';

import { TodoProvider } from "../../providers/todo/todo";
import { ArchivedTodosPage } from '../archived-todos/archived-todos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = [];
  public reorderIsEnabled = false;
  // public archivedTodosPage = ArchivedTodosPage;

  constructor(private toastController: ToastController,private todoProvider:TodoProvider, public navCtrl: NavController, private alertController: AlertController) {
    this.todos = this.todoProvider.getTodos();
  }

  archiveTodo(todoIndex){
    this.todoProvider.archiveTodo(todoIndex);
  }

  goToArchivePage(){
    this.navCtrl.push(ArchivedTodosPage);
  }

  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  itemReordered($event){
    reorderArray(this.todos, $event);
  }

  openTodoAlert(){
    let addTodoAlert = this.alertController.create({
      title: "Add a todo",
      message: "Enter your todo",
      inputs: [
        {
          type: "text",
          name: "addTodoInput",
          placeholder: "Tache"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add",
          handler: (inputData) => {
            let todoText;
            todoText = inputData.addTodoInput;
            //this.todos.push(todoText);
            this.todoProvider.addTodo(todoText);

            addTodoAlert.onDidDismiss(() => {
              let addTodoToast = this.toastController.create({
                message: "Todo added",
                duration: 2000
              });
              addTodoToast.present();
            });

            
          }
        }
      ]
    });
    addTodoAlert.present();
  }

  openEditTodoAlert(todoIndex){
    let editTodoAlert = this.alertController.create({
      title: "Edit a todo",
      message: "Update your todo",
      inputs: [
        {
          type: "text",
          name: "editTodoInput",
          value: this.todos[todoIndex]
        }
      ],
      buttons:[
        {
          text: "cancel"
        },
        {
          text: "Update",
          handler: (inputData) => {
            let todoText;
            todoText = inputData.editTodoInput;
            this.todoProvider.editTodo(todoIndex, todoText);

            editTodoAlert.onDidDismiss(() => {
              let editTodoToast = this.toastController.create({
                message: "Todo updated",
                duration: 2000
              });
              editTodoToast.present();
            });
          }       
        }
      ]
    });
    editTodoAlert.present();
  }

}
