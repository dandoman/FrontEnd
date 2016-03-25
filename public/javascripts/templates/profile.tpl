<div class="row">
    <div class="col-lg-12">
        <h1 class="page-header">
            Profile
        </h1>
    </div>
</div>

<div class="row">
	<div class="form-group col-lg-6 col-sm-12">
		<input class="form-control" type="text" id="full_name" placeholder="Full Name" value="<%= contactName %>"></input>
	</div>
	<div class="form-group col-lg-6 col-sm-12">
		<input class="form-control" type="text" id="email" placeholder="Email" value="<%= contactEmail %>">
	</div>
</div>
<div class="row">
	<div class="form-group col-lg-6 col-sm-12">
		<input class="form-control" type="text" id="organization_name" placeholder="Organization Name" value="<%= organizationName %>">
	</div>
	<div class="form-group col-lg-6 col-sm-12">
		<input class="form-control" type="text" id="organization_address" placeholder="Organization Address" value="<%= organizationAddress %>">
	</div>
</div>
<div class="row">
	<div class="form-group col-lg-6 col-sm-12">
		<input class="form-control" type="test" id="pwd" placeholder="Password">
	</div>
	<div class="form-group col-lg-6 col-sm-12">
		<input class="form-control" type="test" id="pwd2" placeholder="Re-enter Password">
	</div>
</div>
<div class="row">
	<div class="form-group col-lg-6 col-sm-12">
		<input class="form-control" type="test" id="phone_number" placeholder="Phone Number" value="<%= contactPhoneNumber %>">
	</div>
	<div class="form-group col-lg-6 col-sm-12">
		<input class="form-control" type="test" id="type" placeholder="Account Type" value="<%= accountType %>">
	</div>
</div>
<div class="row">
	<div class="form-group col-lg-6 col-sm-12">
		<input class="form-control" type="test" id="billing_name" placeholder="Billing Name" value="<%= billingName %>">
	</div>
	<div class="form-group col-lg-6 col-sm-12">
		<input class="form-control" type="test" id="billing_address" placeholder="Billing Address" value="<%= billingAddress %>">
	</div>
</div>

<button id="save_profile" type="submit" class="btn btn-primary">Save</button>
