var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_kdwl_1 = new ol.format.GeoJSON();
var features_kdwl_1 = format_kdwl_1.readFeatures(json_kdwl_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kdwl_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kdwl_1.addFeatures(features_kdwl_1);
var lyr_kdwl_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kdwl_1, 
                style: style_kdwl_1,
                popuplayertitle: "kdwl",
                interactive: true,
    title: 'kdwl<br />\
    <img src="styles/legend/kdwl_1_0.png" /> Commercial<br />\
    <img src="styles/legend/kdwl_1_1.png" /> Industrial<br />\
    <img src="styles/legend/kdwl_1_2.png" /> Local Road<br />\
    <img src="styles/legend/kdwl_1_3.png" /> Main Road<br />\
    <img src="styles/legend/kdwl_1_4.png" /> Marshy<br />\
    <img src="styles/legend/kdwl_1_5.png" /> paddy<br />\
    <img src="styles/legend/kdwl_1_6.png" /> Park & Play Ground<br />\
    <img src="styles/legend/kdwl_1_7.png" /> Public & Semi Public<br />\
    <img src="styles/legend/kdwl_1_8.png" /> Religious<br />\
    <img src="styles/legend/kdwl_1_9.png" /> residential<br />\
    <img src="styles/legend/kdwl_1_10.png" /> Rubber<br />\
    <img src="styles/legend/kdwl_1_11.png" /> Setvices & Utilities<br />\
    <img src="styles/legend/kdwl_1_12.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_kdwl_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_kdwl_1];
lyr_kdwl_1.set('fieldAliases', {'ID': 'ID', 'LANDUSE_DE': 'LANDUSE_DE', });
lyr_kdwl_1.set('fieldImages', {'ID': 'Range', 'LANDUSE_DE': 'TextEdit', });
lyr_kdwl_1.set('fieldLabels', {'ID': 'inline label - always visible', 'LANDUSE_DE': 'inline label - always visible', });
lyr_kdwl_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});