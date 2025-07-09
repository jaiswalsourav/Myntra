const Profile =()=>{
    return (<div class="container my-5">
  
  <div class="card text-center shadow-sm">
    <div class="card-body">
      
      <h4 class="card-title mb-1">John Doe</h4>
      <button class="btn btn-outline-primary btn-sm">Edit Profile</button>
    </div>
  </div>


  <div class="card mb-4 shadow-sm">
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Order</li>
        <li class="list-group-item">Contact Us</li>
        <li class="list-group-item">Wish List</li>
        <li class="list-group-item">Gift Card</li>
      </ul>
    </div>
  </div>


  <div class="card mb-4 shadow-sm">
    <div class="card-body">
      <h5 class="card-title">Account Settings</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Change Password</li>
        <li class="list-group-item">Notification Settings</li>
        <li class="list-group-item">Saved Addresses</li>
        <li class="list-group-item">Payment Methods</li>
      </ul>
    </div>
  </div>


  <div class="card mb-4 shadow-sm">
    <div class="card-body">
      <h5 class="card-title">Support</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Help Center</li>
        <li class="list-group-item">FAQs</li>
        <li class="list-group-item">Contact Us</li>
      </ul>
    </div>
  </div>


  <div class="text-center">
    <button class="btn btn-danger">Logout</button>
  </div>
</div>
  );
    
}

export default Profile;
