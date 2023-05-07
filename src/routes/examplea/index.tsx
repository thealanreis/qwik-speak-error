import { component$ } from "@builder.io/qwik";
import { Speak, $translate as t } from "qwik-speak";

export default component$(() => {

    return(
        <Speak assets={['examplea']}>
            {t('examplea.text')}
        </Speak>
    )
})