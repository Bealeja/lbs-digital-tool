import "./index.scss";

const AdminFundraiserPage = () => {
  return (
    <div>
      <div class="margin background-grey spacer">
        <h2>Application Requirements</h2>
        <div class="flex-row progress-container">
          <h3>Progress: </h3>
          <div class="progress-bar-container">
            <div class="progress-bar"></div>
          </div>
        </div>

        <form class="form flex-column">
          <label>
            <span>Filled Out Checklist:</span>
            <input required placeholders="" type="file" class="input" />
          </label>
          <label>
            <span>PhotoID:</span>
            <input required placeholders="" type="file" class="input" />
          </label>
          <label>
            <span>Disclosure Agreement:</span>
            <input required placeholders="" type="file" class="input" />
          </label>
          <label>
            <span>Attendee List:</span>
            <input required placeholders="" type="file" class="input" />
          </label>
          <label>
            <span>Banner:</span>
            <input required placeholders="" type="checkbox" class="input" />
          </label>
          <label>
            <span>Content Approved:</span>
            <input required placeholders="" type="checkbox" class="input" />
          </label>
          <label>
            <span>Dates Set:</span>
            <input required placeholders="" type="checkbox" class="input" />
          </label>
          <label>
            <span>Milestones Set:</span>
            <input required placeholders="" type="checkbox" class="input" />
          </label>
        </form>
      </div>

      <div class="flex-row margin flex-around">
        <div class="background-grey flex-container spacer">
          <h2>Support Documents</h2>
          <form class="flex-column">
            <label>
              <span>
                <a href="example.pdf" download>
                  Checklist.pdf
                </a>
              </span>
            </label>
            <label>
              <span>
                <a href="example.pdf" download>
                  How to run this fundraiser.pdf
                </a>
              </span>
            </label>
            <label>
              <span>
                <a href="example.pdf" download>
                  LBS Logos.zip
                </a>
              </span>
            </label>
            <label>
              <span>
                <a href="example.pdf" download>
                  Required Printouts.pdf
                </a>
              </span>
            </label>
            <label>
              <span>
                <a href="example.pdf" download>
                  Industry Contacts.pdf
                </a>
              </span>
            </label>
          </form>
        </div>

        <div class=" flex-container spacer flex-around flex-column">
          <div class="background-grey flex-vertical">
            <h2>Details</h2>
            <form class="form flex-column">
              <label>
                <span>Cutoff Date:</span>
                <input required type="date" class="input"></input>
              </label>
              <label>
                <span>Event Start Date</span>
                <input required type="date" class="input"></input>
              </label>
              <label>
                <span>Event Start Time</span>
                <input required type="time" class="input"></input>
              </label>
            </form>
          </div>
          <div class="background-grey flex-vertical">
            <h2>Details</h2>
            <form class="form flex-column">
              <label>
                <span>Cutoff Date:</span>
                <input required type="date" class="input"></input>
              </label>
              <label>
                <span>Event Start Date</span>
                <input required type="date" class="input"></input>
              </label>
              <label>
                <span>Event Start Time</span>
                <input required type="time" class="input"></input>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFundraiserPage;
