DEFAULT_VOL = 0.2

function add_context_utt_selector(num_utts) {
    selector_html = ""
    selector_html += '<div class=textbox_element id="utt_selector_div">'
    selector_html += 'sample list (click to select) >> </br>'
    selector_html += '<select id="context-utt_list" name="context-utt_list" size='+ (1)+ '>'
    for (var i =0; i < num_utts; i++) {
        selector_html += '<option value="context-'+i+'">input'+i+': dailydialog </option>'
    }
    selector_html += "</select> </br>"
    selector_html += "</div>"
    document.body.insertAdjacentHTML('beforeend', selector_html)
}

function set_default_vol_to_all(models=["matcha", "tacotron", "tacotron_prosody"]) {
    for (var model_i=0; model_i < models.length; model_i ++) {
        var model = models[model_i]
        for (var i =0; i < 7; i++){
            audio_element_name = model + '_' + i
            // print audio_element name
            // console.log(audio_element_name)
            // console.log(model)
            audio_element = document.getElementById(audio_element_name)
            audio_element.volume = DEFAULT_VOL
        }
    }
}