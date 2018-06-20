# Clusterize-Js-Header-Column-Width-Sync
The helper function will automatically apply the header column width to the table rows

# Usage

## HTML
<div class="clusterize">
	<table>
		<thead id="headerArea">
			<tr class="grey darken-4 white-text">
				<th width='10%'>Id</th>
				<th width='20%'>Name</th>
				<th width='20%'>Status</th>
				<th width='30%'>Domain</th>
				<th width='20%'>Controls</th>
			</tr>
		</thead>
	</table>
	<div id="scrollArea" class="clusterize-scroll">
		<table>
			<tbody id="contentArea" class="clusterize-content">
				<tr class="clusterize-no-data">
					<td>Loading data…</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
                
## JAVASCRIPT
var table = getSyncingClusterise('headerArea', 'contentArea', 'scrollArea');
table.update([response.table]);
