ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4258").setExtent([-31.223342, 23.555678, 15.957337, 57.988374]);
var wms_layers = [];


        var lyr_hibrido_0 = new ol.layer.Tile({
            'title': 'hibrido',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Vrticesgeodsicos_1 = new ol.format.GeoJSON();
var features_Vrticesgeodsicos_1 = format_Vrticesgeodsicos_1.readFeatures(json_Vrticesgeodsicos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4258'});
var jsonSource_Vrticesgeodsicos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vrticesgeodsicos_1.addFeatures(features_Vrticesgeodsicos_1);
var lyr_Vrticesgeodsicos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vrticesgeodsicos_1, 
                style: style_Vrticesgeodsicos_1,
                interactive: true,
    title: 'Vértices geodésicos<br />\
    <img src="styles/legend/Vrticesgeodsicos_1_0.png" /> 0 - 1000 m<br />\
    <img src="styles/legend/Vrticesgeodsicos_1_1.png" /> 1000 - 2000 m<br />\
    <img src="styles/legend/Vrticesgeodsicos_1_2.png" /> 2000 - 3000 m<br />\
    <img src="styles/legend/Vrticesgeodsicos_1_3.png" /> > 3000 m<br />'
        });

lyr_hibrido_0.setVisible(true);lyr_Vrticesgeodsicos_1.setVisible(true);
var layersList = [lyr_hibrido_0,lyr_Vrticesgeodsicos_1];
lyr_Vrticesgeodsicos_1.set('fieldAliases', {'fid': 'fid', 'vértice_geodésico': 'vértice_geodésico', 'longitud': 'longitud', 'latitud': 'latitud', 'elevación_sobre_el_nivel_del_mar': 'elevación_sobre_el_nivel_del_mar', });
lyr_Vrticesgeodsicos_1.set('fieldImages', {'fid': 'TextEdit', 'vértice_geodésico': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', 'elevación_sobre_el_nivel_del_mar': 'TextEdit', });
lyr_Vrticesgeodsicos_1.set('fieldLabels', {'fid': 'no label', 'vértice_geodésico': 'header label', 'longitud': 'no label', 'latitud': 'no label', 'elevación_sobre_el_nivel_del_mar': 'header label', });
lyr_Vrticesgeodsicos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});