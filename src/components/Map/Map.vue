<template>
    <section class="map area">
        <h2>位置</h2>
        <div class="container">
            <div class="google-map">

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.235355691627!2d121.12052367442446!3d22.793741424830618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346fba2d125d3459%3A0x6ae15f1fb75cb961!2z5Y-w5p2x6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1684118062897!5m2!1szh-TW!2stw"
                    width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="map-txt">
                <h3>交通指南</h3>

                <ul>
                    <li>搭到台東車站，步行三分鐘，約200公尺，即可抵達。</li>

                    <li>自行開車<br />北部:國三、國五接台九線，即可抵達。</li>
                    <li>南部:國三接台九線，即可抵達。</li>

                    <li>搭火車<br />位於台東車站附近，搭車、自行開車可抵達。</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import './Map.scss';
</script>