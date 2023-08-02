import "../../../App.scss";
import ActionItems from "../../../components/actionitemsComponent";
import Banner from "../../../components/bannerComponent";
import Card from "../../../components/cardComponent";

const AdminHostPage = () => {
  return (
    <div>
      <Banner />
      <ActionItems />
      <div class="margin">
        <Card />
        <div class="flex-row center-items">
          <button>Approve</button>
          <button>Contact</button>
          <button>Decline</button>
        </div>
      </div>
    </div>
  );
};

export default AdminHostPage;
