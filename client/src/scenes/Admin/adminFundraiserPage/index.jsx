import "./index.scss";

const AdminFundraiserPage = () => {
  return (
    <div>
      <div class="flex-row application-requirments margin">
        <h2>Application Requirements</h2>
        <div class="progress-bar-container">
          <div class="progress-bar"></div>
        </div>
      </div>
      <form class="form flex-column margin">
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
        <h2>Support Documents</h2>
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
  );
};

export default AdminFundraiserPage;
