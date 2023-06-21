


export const StickyForm = () => {
    return (
      <div className="sticky-note">
        <form className="sform">
          <input type="text" name="title" placeholder="Title" className="input-field"/> &nbsp;
          <input type="date" name="date" className="input-field"/><br/>
          <textarea name="notes" placeholder="Add your notes here" className="textarea-field"/><br/>
          <input type="submit" value="Submit" className="submit-button"/>
        </form>
      </div>
    )
  }
  