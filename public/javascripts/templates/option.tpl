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
	<label for="statsOptions">Select Measurement:</label>
	<select class="form-control" id="statsOptions">
		<option value="avg">Average</option>
		<option value="count">Count</option>
		<option value="sum">Sum</option>
	    <option value="p0">p0</option>
	    <option value="p50">p50</option>
	    <option value="p75">p75</option>
	    <option value="p90">p90</option>
	    <option value-"p99">p99</option>
	    <option value="p100">p100</option>
	    <option value="p999">p999</option>
	    <option value="p9999">p9999</option>
  	</select>
</div>
<div class="input-group date begin col-lg-3 col-md-3 col-sm-3 pull-left">
    <input type="text" class="form-control" id="date_begin2"/>
    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
</div>
<div class="input-group date end col-lg-3 col-md-3 col-sm-3 pull-left">
    <input type="text" class="form-control" id="date_end2"/>
    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
</div>

<button type="button" class="btn btn-primary pull-right" id="graphSubmit_button">graph!</button>