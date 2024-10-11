import React from "react";

const Edit = () => {
  return (
    <div className="content-wrapper">
      <div className="todo">
        {/* START: Header 컴포넌트 */}
        <header>
          <h2 className="todo__title">What’s the Plan for Today?</h2>
        </header>
        {/* END: Header 컴포넌트 */}
        <main>
          {/* START: Form컴포넌트 */}
          <section>
            <div className="form">
              <form action="/create" method="post">
                <div className="form-wrap">
                  <input
                    type="text"
                    className="form__element"
                    name="title"
                    value={"할일"}
                    placeholder="Edit a todo"
                  />
                  <button className="form__button update" type="submit">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </section>
          {/* END: Form컴포넌트 */}
        </main>
      </div>
    </div>
  );
};

export default Edit;
