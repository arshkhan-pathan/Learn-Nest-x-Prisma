import React, { useState } from "react";

function Item({ props, removehandler ,data, deleteTodo,updateTodo}) {  
  const removeHandle = (ind) => {
    deleteTodo({ variables: { id: ind} })
  };



  const updateHandle = (ind) => {
   

    updateTodo({ variables: { input: {"completed":true,id:ind} } })
  };


  return (
    <>
      <div className="container py-5 h-100">
        <table className="table mb-4">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Todo item</th>

              <th scope="col">Actions</th>
            </tr>
          </thead>
          {data && data?.getTodosByUserId?.map((el, ind) => {
            return (
              <>
                {" "}
                <tbody>
                  <tr>
                    <th scope="row">{ind + 1}</th>
                    <td className={el.completed?"list-group-item-success":"list-group-item-danger "}>{el.title}</td>
                    <td>
                      <button
                        type="submit"
                        className="btn btn-danger"
                        onClick={() => {
                          removeHandle(el.id);
                        }}
                      >
                        Delete
                      </button>
                   {el.completed?   <button  className="btn btn-success ms-1"  onClick={() => {
                          updateHandle(el.id);
                        }} disabled >
                        Finished
                      </button>:   <button  className="btn btn-success ms-1"  onClick={() => {
                          updateHandle(el.id);
                        }} >
                        Finished
                      </button>}
                      </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Item;
