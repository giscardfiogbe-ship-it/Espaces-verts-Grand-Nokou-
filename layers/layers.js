var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_LimiteGrandNokou_1 = new ol.format.GeoJSON();
var features_LimiteGrandNokou_1 = format_LimiteGrandNokou_1.readFeatures(json_LimiteGrandNokou_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteGrandNokou_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteGrandNokou_1.addFeatures(features_LimiteGrandNokou_1);
var lyr_LimiteGrandNokou_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteGrandNokou_1, 
                style: style_LimiteGrandNokou_1,
                popuplayertitle: 'Limite Grand Nokoué',
                interactive: true,
                title: '<img src="styles/legend/LimiteGrandNokou_1.png" /> Limite Grand Nokoué'
            });
var format_EspacesvertsGrandNokou_2 = new ol.format.GeoJSON();
var features_EspacesvertsGrandNokou_2 = format_EspacesvertsGrandNokou_2.readFeatures(json_EspacesvertsGrandNokou_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EspacesvertsGrandNokou_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EspacesvertsGrandNokou_2.addFeatures(features_EspacesvertsGrandNokou_2);
var lyr_EspacesvertsGrandNokou_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EspacesvertsGrandNokou_2, 
                style: style_EspacesvertsGrandNokou_2,
                popuplayertitle: 'Espaces verts Grand Nokoué',
                interactive: true,
    title: 'Espaces verts Grand Nokoué<br />\
    <img src="styles/legend/EspacesvertsGrandNokou_2_0.png" /> Arbres<br />\
    <img src="styles/legend/EspacesvertsGrandNokou_2_1.png" /> Arbustes<br />\
    <img src="styles/legend/EspacesvertsGrandNokou_2_2.png" /> Herbe<br />\
    <img src="styles/legend/EspacesvertsGrandNokou_2_3.png" /> Vegetation inondee<br />\
    <img src="styles/legend/EspacesvertsGrandNokou_2_4.png" /> <br />' });

lyr_OpenTopoMap_0.setVisible(true);lyr_LimiteGrandNokou_1.setVisible(true);lyr_EspacesvertsGrandNokou_2.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_LimiteGrandNokou_1,lyr_EspacesvertsGrandNokou_2];
lyr_LimiteGrandNokou_1.set('fieldAliases', {'Nom_COM': 'Nom_COM', 'Population': 'Population', 'Code_COM': 'Code_COM', 'Source': 'Source', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_EspacesvertsGrandNokou_2.set('fieldAliases', {'classe': 'classe', 'surface_ha': 'surface_ha', 'type': 'type', });
lyr_LimiteGrandNokou_1.set('fieldImages', {'Nom_COM': 'TextEdit', 'Population': 'TextEdit', 'Code_COM': 'TextEdit', 'Source': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_EspacesvertsGrandNokou_2.set('fieldImages', {'classe': 'Range', 'surface_ha': 'TextEdit', 'type': 'TextEdit', });
lyr_LimiteGrandNokou_1.set('fieldLabels', {'Nom_COM': 'hidden field', 'Population': 'hidden field', 'Code_COM': 'hidden field', 'Source': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_EspacesvertsGrandNokou_2.set('fieldLabels', {'classe': 'hidden field', 'surface_ha': 'hidden field', 'type': 'no label', });
lyr_EspacesvertsGrandNokou_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});