<div class="row">
	<div class="form-group col-lg-4 col-md-4 col-sm-12 col-xs-12">
		<label id="applicationLabel" for="applicationOptions">Select Application Name:</label>
		<select class="form-control" id="applicationOptions">
	  	</select>
	</div>
	<div class="form-group form-group col-lg-4 col-md-4 col-sm-12 col-xs-12">
		<label id="hostnameLabel" for="hostnameOptions">Select hostname:</label>
		<select class="form-control" id="hostnameOptions">
	  	</select>
	</div>
	<div class="form-group form-group col-lg-4 col-md-4 col-sm-12 col-xs-12">
		<label id="operationLabel" for="operationOptions">Select Operation Name:</label>
		<select class="form-control" id="operationOptions">
	  	</select>
	</div>
	<div class="form-group form-group col-lg-4 col-md-4 col-sm-12 col-xs-12">
		<label id="marketLabel" for="marketOptions">Select Marketplace:</label>
		<select class="form-control" id="marketOptions">
	  	</select>
	</div>
	<div class="form-group form-group col-lg-4 col-md-4 col-sm-12 col-xs-12">
		<label id="metricLabel" for="metricOptions">Select Metric Name:</label>
		<select class="form-control" id="metricOptions">
	  	</select>
	</div>

	<div class="form-group form-group col-lg-4 col-md-4 col-sm-12 col-xs-12">
	    <label>Type</label>
	    <select class="form-control" id="type">
	    	<option value="p0">p0</option>
	    	<option value="p50">p50</option>
	    	<option value="75">p75</option>
	    	<option value="p90">p90</option>
	    	<option value="p99">p99</option>
	    	<option value="p999">p999</option>
	    	<option value="p9999">p9999</option>
	    	<option value="p100">p100</option>
	    	<option value="avg">Average</option>
	    	<option value="count">Count</option>
	    	<option value="sum">Sum</option>
	  	</select>
	</div>

	<div class="form-group form-group col-lg-4 col-md-4 col-sm-12 col-xs-12">
	    <label>Threshold</label>
	    <input class="form-control" type="number" id="threshold">
	</div>

	<div class="form-group form-group col-lg-4 col-md-4 col-sm-12 col-xs-12">
	    <label>Counts</label>
	    <input class="form-control" type="number" id="counts">
	</div>

	<div class="form-group form-group col-lg-4 col-md-4 col-sm-12 col-xs-12">
	    <label>Less</label>
	    <select class="form-control" id="less">
	    	<option value="true">True</option>
	    	<option value="false">False</option>
	  	</select>
	</div>

	<div class="form-group form-group col-lg-4 col-md-4 col-sm-12 col-xs-12">
	    <label>Email</label>
	    <input class="form-control" type="email" id="email">
	</div>
</div>

<div class="row formfield">
	<div class="form-group form-group col-lg-4 col-md-4 col-sm-12 col-xs-12">
	    <label for="textarea">Description</label>
	    <textarea id="textarea" rows="4" cols="50"></textarea>
	</div>
</div>

<div class="row">
	<button type="button" class="btn btn-primary pull-right" id="createMonitor">Create</button>
</div>