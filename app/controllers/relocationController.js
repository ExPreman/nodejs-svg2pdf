var AWS = require('aws-sdk');
const s3 = new AWS.S3({
  params: { 
    Bucket: process.env.S3_BUCKET,
    Region: process.env.S3_REGION,
  },
});

/**
 * @example curl -XGET "http://localhost:8081/relocation/generate"
 */
async function generateRelocation (ctx, next) {
  // body request
  console.log(ctx.request.body);

  var PDFDocument = require('pdfkit'),
      SVGtoPDF = require('svg-to-pdfkit'),
      doc = new PDFDocument(),
      svg = `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.28 841.89">
      <defs>
        <style>
          .cls-1, .cls-38 {
            fill: #fff;
          }

          .cls-2, .cls-65 {
            font-size: 12px;
          }

          .cls-2, .cls-23, .cls-4, .cls-41, .cls-5, .cls-50, .cls-64, .cls-65 {
            fill: #231f20;
          }

          .cls-2, .cls-41, .cls-45 {
            font-family: Roboto-Bold, Roboto;
          }

          .cls-2, .cls-24, .cls-42, .cls-45 {
            font-weight: 700;
          }

          .cls-3 {
            letter-spacing: -0.01em;
          }

          .cls-23, .cls-4, .cls-41, .cls-5 {
            font-size: 11px;
          }

          .cls-4, .cls-43, .cls-50 {
            font-family: Roboto-Italic, Roboto;
          }

          .cls-24, .cls-4, .cls-43, .cls-50 {
            font-style: italic;
          }

          .cls-25, .cls-5, .cls-65 {
            font-family: Roboto-Regular, Roboto;
          }

          .cls-6 {
            letter-spacing: -0.01em;
          }

          .cls-7 {
            letter-spacing: 1.11em;
          }

          .cls-8 {
            letter-spacing: 2.36em;
          }

          .cls-9 {
            letter-spacing: -0.05em;
          }

          .cls-10 {
            letter-spacing: 0em;
          }

          .cls-11 {
            letter-spacing: 2.2em;
          }

          .cls-12 {
            letter-spacing: 0.12em;
          }

          .cls-13 {
            letter-spacing: -0.02em;
          }

          .cls-14 {
            letter-spacing: 0.5em;
          }

          .cls-15 {
            letter-spacing: 2.36em;
          }

          .cls-16 {
            letter-spacing: 2.11em;
          }

          .cls-17 {
            letter-spacing: 1.64em;
          }

          .cls-18 {
            letter-spacing: -0.01em;
          }

          .cls-19 {
            letter-spacing: 1.17em;
          }

          .cls-20 {
            letter-spacing: -0.11em;
          }

          .cls-21 {
            fill: none;
            stroke: #231f20;
            stroke-width: 0.5px;
          }

          .cls-21, .cls-38 {
            stroke-miterlimit: 10;
          }

          .cls-22 {
            fill: #e6e7e8;
          }

          .cls-23 {
            font-family: Roboto-BoldItalic, Roboto;
          }

          .cls-26 {
            letter-spacing: -0.01em;
          }

          .cls-27 {
            letter-spacing: -0.01em;
          }

          .cls-28 {
            letter-spacing: -0.04em;
          }

          .cls-29 {
            letter-spacing: 0.91em;
          }

          .cls-30 {
            letter-spacing: 0.89em;
          }

          .cls-31 {
            letter-spacing: -0.04em;
          }

          .cls-32 {
            letter-spacing: 0.66em;
          }

          .cls-33 {
            letter-spacing: 0em;
          }

          .cls-34 {
            letter-spacing: -0.01em;
          }

          .cls-35 {
            letter-spacing: -0.01em;
          }

          .cls-36 {
            letter-spacing: -0.05em;
          }

          .cls-37 {
            letter-spacing: 1.05em;
          }

          .cls-38 {
            stroke: #d1d3d4;
          }

          .cls-39 {
            letter-spacing: -0.01em;
          }

          .cls-40 {
            letter-spacing: -0.01em;
          }

          .cls-44 {
            letter-spacing: -0.01em;
          }

          .cls-46 {
            letter-spacing: -0.01em;
          }

          .cls-47 {
            letter-spacing: -0.02em;
          }

          .cls-48 {
            letter-spacing: -0.02em;
          }

          .cls-49 {
            letter-spacing: -0.01em;
          }

          .cls-50 {
            font-size: 10px;
          }

          .cls-51 {
            letter-spacing: -0.05em;
          }

          .cls-52 {
            letter-spacing: -0.01em;
          }

          .cls-53 {
            letter-spacing: -0.01em;
          }

          .cls-54 {
            letter-spacing: -0.01em;
          }

          .cls-55 {
            letter-spacing: -0.02em;
          }

          .cls-56 {
            letter-spacing: -0.01em;
          }

          .cls-57 {
            letter-spacing: 0.02em;
          }

          .cls-58 {
            letter-spacing: -0.01em;
          }

          .cls-59 {
            letter-spacing: -0.01em;
          }

          .cls-60 {
            letter-spacing: -0.02em;
          }

          .cls-61 {
            letter-spacing: -0.08em;
          }

          .cls-62 {
            letter-spacing: -0.16em;
          }

          .cls-63 {
            letter-spacing: -0.05em;
          }

          .cls-66 {
            letter-spacing: -0.01em;
          }

          .cls-67 {
            letter-spacing: -0.01em;
          }
        </style>
      </defs>
      <title>Relocation form_fontresize</title>
      <rect class="cls-1" width="595.28" height="841.89"/>
      <g>
        <path d="M50.21,47.16V40.73l-.36-.22-9-5.19a2.87,2.87,0,0,1-.38-.23.49.49,0,0,1,0-.77,2.05,2.05,0,0,1,.27-.17c.95-.55,1.9-1.08,2.84-1.65a.85.85,0,0,1,1,0q4.79,2.78,9.59,5.54a.67.67,0,0,1,.37.66q0,5.6,0,11.2a.67.67,0,0,1-.38.65q-1.52.86-3,1.75a.73.73,0,0,1-.82,0l-9.52-5.5-.21-.12a.5.5,0,0,1,0-.91c.37-.23.75-.43,1.12-.65l1.4-.81-5.15-3v.47c0,1.88,0,3.76,0,5.64a.59.59,0,0,0,.35.6q4.56,2.61,9.1,5.25a2.36,2.36,0,0,1,.31.19.49.49,0,0,1,0,.77,1.62,1.62,0,0,1-.24.15c-1,.56-2,1.11-2.91,1.69a.81.81,0,0,1-.93,0Q38.84,53.27,34,50.52a.66.66,0,0,1-.38-.65q0-5.6,0-11.2A.67.67,0,0,1,34,38l3.06-1.76a.71.71,0,0,1,.79,0l9.52,5.5.24.14a.5.5,0,0,1,0,.89l-.21.12L45.51,44l-.34.21C45.39,44.47,49.8,47,50.21,47.16Zm-3.79,6.68-.78-.45-7.86-4.54a.52.52,0,0,0-.62,0c-.48.3-1,.57-1.47.86l-.51.31.39.24L42,54c.62.36,1.24.71,1.86,1.08a.43.43,0,0,0,.52,0c.27-.18.56-.33.84-.49ZM41.77,34.7l8.95,5.17L53,38.52l-8.95-5.16ZM36.95,47.81a1.13,1.13,0,0,0,0-.15c0-2.23,0-4.46,0-6.69a.39.39,0,0,0-.24-.38l-1.86-1.07a1,1,0,0,0-.21-.06c-.09,1.1,0,9.32.06,9.64Zm16.58-8.39-.35.18c-.53.3-1,.62-1.58.9a.64.64,0,0,0-.39.66c0,2.07,0,4.14,0,6.2v.43l2.32,1.34ZM38,37.47v2.69l6.13,3.54,2.32-1.34ZM50.2,51c0-.17,0-.28,0-.38,0-.65,0-1.3,0-1.94a.52.52,0,0,0-.32-.53L44.4,45l-.33-.17-2.31,1.33Zm1,0L53,50l-1.81-1ZM37,39.57V37.49c-.62.35-1.19.67-1.8,1Z"/>
        <path d="M133.34,41.55l-3,9.45h-2.64l-4.09-13.79h3.34l2.18,8.72h.08L132,37.21h2.86l2.83,9h.08l2.29-9h3l0,0a.07.07,0,0,1,0,0,2.2,2.2,0,0,1,0,.24L139.17,51h-2.74l-3-9.45Z"/>
        <path d="M152.55,36.79a9.39,9.39,0,0,1,3.22.64,6.49,6.49,0,0,1,3.92,4.27,8,8,0,0,1,0,4.84,6.44,6.44,0,0,1-4.16,4.34,8.44,8.44,0,0,1-6-.06,6.52,6.52,0,0,1-4.29-5.46,7.92,7.92,0,0,1,.29-3.81A6.61,6.61,0,0,1,150.62,37C151.25,36.9,151.91,36.87,152.55,36.79Zm4.32,7.48c0-.35,0-.6-.06-.84a4.08,4.08,0,0,0-3-3.61,4.75,4.75,0,0,0-1.77-.13,3.93,3.93,0,0,0-3.37,2.38,4.86,4.86,0,0,0-.41,2.17,4.28,4.28,0,0,0,8.4,1.19A11.09,11.09,0,0,0,156.86,44.27Z"/>
        <path d="M82,36.79a8.53,8.53,0,0,1,4,1,6.62,6.62,0,0,1,3.42,5.09,8,8,0,0,1-.2,3.42A6.52,6.52,0,0,1,84.64,51a8.41,8.41,0,0,1-5.91-.25,6.53,6.53,0,0,1-4.08-5.44A7.9,7.9,0,0,1,75,41.37,6.61,6.61,0,0,1,80.08,37C80.71,36.9,81.37,36.87,82,36.79ZM77.68,44.1a5.24,5.24,0,0,0,.81,2.66,4.12,4.12,0,0,0,3.74,1.78,4.05,4.05,0,0,0,3.91-3.08,5.15,5.15,0,0,0,.11-2.13A4.06,4.06,0,0,0,83.77,40a4.34,4.34,0,0,0-1.58-.32A4,4,0,0,0,78,42.52,14,14,0,0,0,77.68,44.1Z"/>
        <path d="M163.7,37.19h5.52a7.57,7.57,0,0,1,2.36.35,3.52,3.52,0,0,1,2.54,2.65,4.81,4.81,0,0,1-.1,2.68,3.28,3.28,0,0,1-2.26,2.2l-.39.12s0,0-.05.07L174.77,51l-.42,0c-1,0-1.92,0-2.88,0a.51.51,0,0,1-.53-.32q-1.2-2.32-2.42-4.64c-.37-.71-.15-.56-1-.58h-.8v5.45a15.37,15.37,0,0,1-3,0Zm3.05,2.56v3.1a.64.64,0,0,0,.14,0c.85,0,1.7,0,2.55,0a2.91,2.91,0,0,0,.89-.23A1.05,1.05,0,0,0,171,42a1.48,1.48,0,0,0-.95-2,1.59,1.59,0,0,0-.39-.09Z"/>
        <path d="M190.38,37.28l-6.06,6.34L191,51a1.86,1.86,0,0,1-.27,0c-1.23,0-2.46,0-3.69,0a.65.65,0,0,1-.53-.3l-4.65-5.42-.62-.72c-.13.15-.09.3-.09.43q0,2.74,0,5.48V51h-3c-.08-.3-.11-13,0-13.8,1,0,2,0,3,0v5.57l.09,0,.29-.3q2.34-2.5,4.68-5a.84.84,0,0,1,.7-.31c1,0,2.06,0,3.08,0h.4Z"/>
        <path d="M70.06,47.07l2.52,1.88c-.07.11-.12.2-.19.28a5.43,5.43,0,0,1-3.27,2,7.74,7.74,0,0,1-5.88-1,6.54,6.54,0,0,1-3-4.82,8,8,0,0,1,.26-3.69A6.61,6.61,0,0,1,65.61,37a7.6,7.6,0,0,1,4.24.16,5,5,0,0,1,2.41,1.67L70,40.76c-.06,0-.09,0-.1,0a3.75,3.75,0,0,0-5.77.66,4.88,4.88,0,0,0-.78,2.85,4.54,4.54,0,0,0,1.11,3,3.59,3.59,0,0,0,3.82,1.15,3,3,0,0,0,1.52-1Z"/>
        <path d="M102.18,46.28l3.42,2.55a6,6,0,0,1-2,2,7.13,7.13,0,0,1-3.82,1,8.47,8.47,0,0,1-4-.9,7.12,7.12,0,0,1-3.91-5.62,8.47,8.47,0,0,1,.43-4.31,7.16,7.16,0,0,1,5.19-4.53,8.09,8.09,0,0,1,5,.23,5.64,5.64,0,0,1,2.65,2.05,1,1,0,0,1,.06.14l-3.15,2.57c-.1-.11-.18-.19-.26-.28a2.75,2.75,0,0,0-2.7-1,3.13,3.13,0,0,0-2.65,2A4.31,4.31,0,0,0,97,46.8a3,3,0,0,0,3.26,1.1,2.57,2.57,0,0,0,1.55-1.1Zm1.87,2.78-1.62-1.21-.34.31a3.68,3.68,0,0,1-1.49.8,4.22,4.22,0,0,1-4.84-2,5.45,5.45,0,0,1,0-5.72A4.34,4.34,0,0,1,102.13,40l.13.05,1.46-1.2a4.64,4.64,0,0,0-1.71-1,7.06,7.06,0,0,0-4-.16,6,6,0,0,0-4.7,4.29,7.52,7.52,0,0,0,0,4.4,5.77,5.77,0,0,0,2.64,3.47,7.16,7.16,0,0,0,5.9.73A4.64,4.64,0,0,0,104.06,49.06Z"/>
        <path d="M114.29,52A9,9,0,0,1,110,50.87a7.11,7.11,0,0,1-3.64-5.42,8.46,8.46,0,0,1,.36-4.2,7.15,7.15,0,0,1,5.68-4.78,8.94,8.94,0,0,1,5.3.46,7.09,7.09,0,0,1,4.49,5.9,8.36,8.36,0,0,1-.44,4.31,7.15,7.15,0,0,1-5.45,4.56C115.66,51.85,115,51.88,114.29,52Zm0-14.61a18.91,18.91,0,0,0-1.88.25,6.06,6.06,0,0,0-4.7,4.24,7.46,7.46,0,0,0-.2,3.65,6,6,0,0,0,3.64,4.69,7.85,7.85,0,0,0,4.77.46,6.09,6.09,0,0,0,5-4.32,7.43,7.43,0,0,0,.19-3.69,6,6,0,0,0-3.35-4.51A8.15,8.15,0,0,0,114.3,37.35Z"/>
        <path d="M109.49,44.08a4.73,4.73,0,0,1,.52-2.43,4.58,4.58,0,0,1,4.5-2.54,4.78,4.78,0,0,1,1.55.28,4.24,4.24,0,0,1,2.43,2,5.44,5.44,0,0,1-.07,5.46A4.34,4.34,0,0,1,115.09,49a5.08,5.08,0,0,1-2.25-.14,4.53,4.53,0,0,1-3.28-3.66,3.13,3.13,0,0,1-.07-.48C109.48,44.54,109.49,44.31,109.49,44.08ZM118,44a3.75,3.75,0,0,0-7.25-1.36,4.56,4.56,0,0,0-.23,1.64,3.55,3.55,0,0,0,3.09,3.69,3.63,3.63,0,0,0,3.49-1.17A4.05,4.05,0,0,0,118,44Z"/>
      </g>
      <text class="cls-2" transform="translate(201.87 51)">Relocation <tspan class="cls-3" x="60.53" y="0">F</tspan><tspan x="66.98" y="0">orm</tspan></text>
      <text class="cls-4" transform="translate(33.66 72.47)">Please Fill in Information Below </text>
      <text class="cls-5" transform="translate(33.66 118.66)"><tspan class="cls-6">F</tspan><tspan x="5.97" y="0">orm No</tspan><tspan class="cls-7" x="42.44" y="0">	</tspan><tspan class="cls-8" x="57.43" y="0" xml:space="preserve">			</tspan><tspan x="143.57" y="0">:</tspan><tspan x="0" y="23.93">Company/</tspan><tspan class="cls-9" x="51.04" y="23.93">T</tspan><tspan class="cls-10" x="57.07" y="23.93">enant Name</tspan><tspan class="cls-11" x="116.63" y="23.93">	</tspan><tspan x="143.57" y="23.93">:</tspan><tspan class="cls-9" x="0" y="47.86">T</tspan><tspan class="cls-10" x="6.03" y="47.86">enant PIC</tspan><tspan class="cls-12" x="53.39" y="47.86">	</tspan><tspan class="cls-8" x="57.43" y="47.86" xml:space="preserve">			</tspan><tspan x="143.57" y="47.86">:</tspan><tspan class="cls-9" x="0" y="71.79">T</tspan><tspan class="cls-10" x="6.03" y="71.79">enant PIC</tspan><tspan class="cls-13" x="53.39" y="71.79"> </tspan><tspan class="cls-9" x="55.9" y="71.79">T</tspan><tspan x="61.93" y="71.79">elephone</tspan><tspan class="cls-14" x="106.65" y="71.79">	</tspan><tspan class="cls-15" x="114.86" y="71.79">	</tspan><tspan x="143.57" y="71.79">:</tspan><tspan x="0" y="95.71">Action</tspan><tspan class="cls-16" x="31.54" y="95.71">	</tspan><tspan class="cls-8" x="57.43" y="95.71" xml:space="preserve">			</tspan><tspan x="143.57" y="95.71">:</tspan></text>
      <text class="cls-5" transform="translate(340.32 118.66)">Request Date<tspan class="cls-17" x="65.35" y="0">	</tspan><tspan x="86.14" y="0">:</tspan><tspan x="0" y="23.93">Ag</tspan><tspan class="cls-18" x="13.35" y="23.93">r</tspan><tspan x="16.97" y="23.93">eement No</tspan><tspan class="cls-19" x="70.59" y="23.93">	</tspan><tspan x="86.14" y="23.93">:</tspan><tspan x="0" y="47.86">Email</tspan><tspan class="cls-20" x="27.22" y="47.86">	</tspan><tspan class="cls-8" x="28.71" y="47.86" xml:space="preserve">		</tspan><tspan x="86.14" y="47.86">:</tspan></text>
      <line class="cls-21" x1="185.96" y1="127.34" x2="317.24" y2="127.34"/>
      <line class="cls-21" x1="185.96" y1="150.57" x2="317.24" y2="150.57"/>
      <line class="cls-21" x1="185.96" y1="173.79" x2="317.24" y2="173.79"/>
      <line class="cls-21" x1="185.96" y1="197.01" x2="317.24" y2="197.01"/>
      <line class="cls-21" x1="185.96" y1="220.23" x2="317.24" y2="220.23"/>
      <line class="cls-21" x1="435.34" y1="127.34" x2="566.61" y2="127.34"/>
      <line class="cls-21" x1="435.34" y1="150.57" x2="566.61" y2="150.57"/>
      <line class="cls-21" x1="435.34" y1="173.79" x2="566.61" y2="173.79"/>
      <rect class="cls-22" x="19.59" y="247.68" width="559.46" height="323.33"/>
      <text class="cls-23" transform="translate(33.66 266.5)"><tspan class="cls-24">Details</tspan><tspan class="cls-25"><tspan x="0" y="27.92">M</tspan><tspan class="cls-26" x="9.6" y="27.92">o</tspan><tspan class="cls-27" x="15.8" y="27.92">v</tspan><tspan x="21.05" y="27.92">e Room Date</tspan><tspan class="cls-28" x="83.91" y="27.92">	</tspan><tspan class="cls-15" x="86.14" y="27.92">	</tspan><tspan x="114.86" y="27.92" xml:space="preserve">     :</tspan><tspan x="0" y="55.83">Old Room Date</tspan><tspan class="cls-29" x="73.46" y="55.83">	</tspan><tspan class="cls-8" x="86.14" y="55.83">	</tspan><tspan x="114.86" y="55.83" xml:space="preserve">     :</tspan><tspan x="0" y="83.75">Cur</tspan><tspan class="cls-18" x="16.95" y="83.75">r</tspan><tspan x="20.57" y="83.75">ent Lease </tspan><tspan class="cls-27" x="70.73" y="83.75">P</tspan><tspan x="77.6" y="83.75">eriod</tspan><tspan class="cls-30" x="102.3" y="83.75">	</tspan><tspan x="114.86" y="83.75" xml:space="preserve">     :</tspan><tspan x="0" y="111.67">Cur</tspan><tspan class="cls-18" x="16.95" y="111.67">r</tspan><tspan x="20.57" y="111.67">ent Monthly </tspan><tspan class="cls-27" x="80.98" y="111.67">P</tspan><tspan x="87.85" y="111.67">eriod</tspan><tspan class="cls-31" x="112.54" y="111.67">	</tspan><tspan x="114.86" y="111.67" xml:space="preserve">     :</tspan><tspan x="0" y="139.58">Cur</tspan><tspan class="cls-18" x="16.95" y="139.58">r</tspan><tspan x="20.57" y="139.58">ent Deposit</tspan><tspan class="cls-32" x="76.2" y="139.58">	</tspan><tspan class="cls-8" x="86.15" y="139.58">	</tspan><tspan x="114.86" y="139.58" xml:space="preserve">     :</tspan><tspan x="0" y="167.5">Cur</tspan><tspan class="cls-18" x="16.95" y="167.5">r</tspan><tspan class="cls-33" x="20.57" y="167.5">ent Ad</tspan><tspan class="cls-26" x="52.16" y="167.5">v</tspan><tspan x="57.41" y="167.5">ance </tspan><tspan class="cls-34" x="83.77" y="167.5">P</tspan><tspan class="cls-35" x="90.65" y="167.5">a</tspan><tspan class="cls-10" x="96.55" y="167.5">yment :</tspan><tspan x="0" y="195.42">Cur</tspan><tspan class="cls-18" x="16.95" y="195.42">r</tspan><tspan class="cls-33" x="20.57" y="195.42">ent </tspan><tspan class="cls-34" x="38.78" y="195.42">P</tspan><tspan class="cls-35" x="45.66" y="195.42">a</tspan><tspan class="cls-10" x="51.56" y="195.42">yment</tspan><tspan class="cls-13" x="81.9" y="195.42"> </tspan><tspan class="cls-36" x="84.41" y="195.42">T</tspan><tspan x="90.44" y="195.42" xml:space="preserve">erms     :</tspan><tspan x="0" y="223.33">Cur</tspan><tspan class="cls-18" x="16.95" y="223.33">r</tspan><tspan class="cls-33" x="20.57" y="223.33">ent </tspan><tspan class="cls-34" x="38.78" y="223.33">P</tspan><tspan class="cls-35" x="45.66" y="223.33">a</tspan><tspan class="cls-10" x="51.56" y="223.33">yment Schedule:</tspan><tspan x="0" y="251.25">Remarks</tspan><tspan class="cls-37" x="43.19" y="251.25">	</tspan><tspan class="cls-8" x="57.43" y="251.25" xml:space="preserve">		</tspan><tspan x="114.86" y="251.25" xml:space="preserve">     :</tspan></tspan></text>
      <rect class="cls-38" x="170.96" y="281.34" width="131.28" height="21.48"/>
      <text class="cls-5"><tspan x="327.76" y="294.41">New Room Number :</tspan><tspan x="335.19" y="322.33">New Lease </tspan><tspan class="cls-27" x="391.8" y="322.33">P</tspan><tspan x="398.67" y="322.33">eriod :</tspan><tspan x="324.95" y="350.25">New Monthly </tspan><tspan class="cls-39" x="391.8" y="350.25">P</tspan><tspan class="cls-33" x="398.67" y="350.25">eriod :</tspan><tspan x="361.29" y="378.16">New Deposit :</tspan><tspan x="310.6" y="406.08">New Ad</tspan><tspan class="cls-26" x="348.64" y="406.08">v</tspan><tspan class="cls-33" x="353.89" y="406.08">ance </tspan><tspan class="cls-40" x="380.25" y="406.08">P</tspan><tspan class="cls-26" x="387.13" y="406.08">a</tspan><tspan x="393.03" y="406.08">yment :</tspan></text>
      <rect class="cls-38" x="170.96" y="309.27" width="131.28" height="21.48"/>
      <rect class="cls-38" x="170.96" y="337.2" width="131.28" height="21.48"/>
      <rect class="cls-38" x="170.96" y="365.13" width="131.28" height="21.48"/>
      <rect class="cls-38" x="170.96" y="393.06" width="131.28" height="21.48"/>
      <rect class="cls-38" x="434.34" y="281.34" width="131.28" height="21.48"/>
      <rect class="cls-38" x="434.34" y="309.27" width="131.28" height="21.48"/>
      <rect class="cls-38" x="434.34" y="337.2" width="131.28" height="21.48"/>
      <rect class="cls-38" x="434.34" y="365.13" width="131.28" height="21.48"/>
      <rect class="cls-38" x="434.34" y="393.06" width="131.28" height="21.48"/>
      <rect class="cls-38" x="170.96" y="420.99" width="131.28" height="21.48"/>
      <rect class="cls-38" x="170.96" y="448.92" width="131.28" height="21.48"/>
      <rect class="cls-38" x="170.96" y="476.85" width="131.28" height="21.48"/>
      <rect class="cls-38" x="170.96" y="504.79" width="400.65" height="47.07"/>
      <g>
        <g>
          <text class="cls-41" transform="translate(62.46 602.14)"><tspan class="cls-42">Requested <tspan class="cls-40" x="55.54" y="0">b</tspan><tspan x="61.67" y="0">y</tspan></tspan><tspan class="cls-43"><tspan x="12.58" y="13.56">(CM/BD)</tspan></tspan></text>
          <text class="cls-5" transform="translate(57.72 674.53)">Name &amp; Signatu<tspan class="cls-44" x="78.65" y="0">r</tspan><tspan x="82.27" y="0">e</tspan><tspan class="cls-45"><tspan x="0" y="13.2">Date :</tspan></tspan></text>
        </g>
        <g>
          <text class="cls-5" transform="translate(193.81 674.53)">Name &amp; Signatu<tspan class="cls-44" x="78.65" y="0">r</tspan><tspan class="cls-33" x="82.27" y="0">e</tspan><tspan class="cls-45"><tspan x="0" y="13.2">Date :</tspan></tspan></text>
          <text class="cls-41" transform="translate(201.17 602.14)"><tspan class="cls-42">R<tspan class="cls-46" x="7.02" y="0">e</tspan><tspan x="12.9" y="0">viewed </tspan><tspan class="cls-40" x="50.28" y="0">b</tspan><tspan x="56.42" y="0">y</tspan></tspan><tspan class="cls-43"><tspan x="-17.1" y="13.56">(CM Lead/BD Head)</tspan></tspan></text>
        </g>
        <g>
          <text class="cls-5" transform="translate(328.66 674.53)">Name &amp; Signatu<tspan class="cls-44" x="78.65" y="0">r</tspan><tspan class="cls-33" x="82.27" y="0">e</tspan><tspan class="cls-45"><tspan x="0" y="13.2">Date :</tspan></tspan></text>
          <text class="cls-41" transform="translate(336.23 602.14)"><tspan class="cls-42"><tspan class="cls-47">A</tspan><tspan x="7.14" y="0">pp</tspan><tspan class="cls-48" x="19.53" y="0">r</tspan><tspan class="cls-26" x="23.35" y="0">o</tspan><tspan class="cls-27" x="29.49" y="0">v</tspan><tspan x="34.98" y="0">ed </tspan><tspan class="cls-34" x="49.86" y="0">b</tspan><tspan x="55.99" y="0">y</tspan></tspan><tspan class="cls-43"><tspan x="16.67" y="13.56">(CGS)</tspan></tspan></text>
        </g>
        <g>
          <text class="cls-5" transform="translate(458.5 674.53)">Name &amp; Signatu<tspan class="cls-44" x="78.65" y="0">r</tspan><tspan class="cls-33" x="82.27" y="0">e</tspan><tspan class="cls-45"><tspan x="0" y="13.2">Date :</tspan></tspan></text>
          <text class="cls-41" transform="translate(468.16 602.14)"><tspan class="cls-42">Chec<tspan class="cls-49" x="25.04" y="0">k</tspan><tspan x="30.8" y="0">ed </tspan><tspan class="cls-40" x="45.69" y="0">b</tspan><tspan x="51.82" y="0">y</tspan></tspan><tspan class="cls-43"><tspan x="17.78" y="13.56">(CG)</tspan></tspan></text>
        </g>
      </g>
      <text class="cls-50" transform="translate(30.57 729.43)"><tspan class="cls-51">T</tspan><tspan x="5.35" y="0">enant </tspan><tspan class="cls-52" x="32.33" y="0">r</tspan><tspan x="35.57" y="0">equest for </tspan><tspan class="cls-53" x="82.4" y="0">r</tspan><tspan x="85.63" y="0">oom changes will be p</tspan><tspan class="cls-53" x="182.84" y="0">r</tspan><tspan x="186.07" y="0">ocessed at </tspan><tspan class="cls-54" x="236.21" y="0">I</tspan><tspan class="cls-13" x="238.75" y="0">T</tspan><tspan x="244.39" y="0" xml:space="preserve"> system within 1-9 </tspan><tspan class="cls-55" x="325.76" y="0">W</tspan><tspan x="334.26" y="0">orking D</tspan><tspan class="cls-56" x="370.3" y="0">a</tspan><tspan x="375.55" y="0">ys since Corpo</tspan><tspan class="cls-13" x="439.65" y="0">r</tspan><tspan x="442.79" y="0">ate G</tspan><tspan class="cls-53" x="465.63" y="0">r</tspan><tspan x="468.86" y="0">owth Suppo</tspan><tspan class="cls-57" x="520.61" y="0">r</tspan><tspan x="524.18" y="0">t </tspan><tspan class="cls-52" x="0" y="12">r</tspan><tspan x="3.24" y="12">ecei</tspan><tspan class="cls-58" x="21.14" y="12">v</tspan><tspan x="25.82" y="12">ed complete information and suppo</tspan><tspan class="cls-57" x="180.94" y="12">r</tspan><tspan x="184.51" y="12">ting document for Relocation </tspan><tspan class="cls-3" x="313.38" y="12">F</tspan><tspan x="318.69" y="12">orm f</tspan><tspan class="cls-53" x="342.02" y="12">r</tspan><tspan x="345.25" y="12">om CM/BD team, depends on the type of </tspan><tspan x="0" y="24">actions </tspan><tspan class="cls-52" x="34.56" y="24">r</tspan><tspan x="37.79" y="24">equi</tspan><tspan class="cls-52" x="56.34" y="24">r</tspan><tspan x="59.58" y="24">ed </tspan><tspan class="cls-59" x="72.73" y="24">b</tspan><tspan x="78.17" y="24">y FM and PM.</tspan><tspan x="0" y="36">Co</tspan><tspan class="cls-59" x="11.94" y="36">p</tspan><tspan x="17.38" y="36">y of this will be distributed </tspan><tspan class="cls-59" x="133.74" y="36">b</tspan><tspan x="139.18" y="36">y CM </tspan><tspan class="cls-53" x="163.6" y="36">t</tspan><tspan x="166.72" y="36">o Corpo</tspan><tspan class="cls-13" x="201.1" y="36">r</tspan><tspan x="204.23" y="36">ate G</tspan><tspan class="cls-53" x="227.07" y="36">r</tspan><tspan x="230.3" y="36">owth Suppo</tspan><tspan class="cls-57" x="282.05" y="36">r</tspan><tspan x="285.63" y="36">t</tspan><tspan x="0" y="48">Distribution list </tspan><tspan class="cls-53" x="68.28" y="48">t</tspan><tspan x="71.4" y="48">o Company G</tspan><tspan class="cls-53" x="129.89" y="48">r</tspan><tspan x="133.12" y="48">owth (CG), </tspan><tspan class="cls-60" x="181.31" y="48">F</tspan><tspan x="186.55" y="48">acility Manager (FM) and Finance Accounting (</tspan><tspan class="cls-61" x="389.45" y="48">F</tspan><tspan x="394.03" y="48">A)</tspan><tspan x="0" y="60">Suppo</tspan><tspan class="cls-57" x="27.77" y="60">r</tspan><tspan x="31.34" y="60">ting document for old tenant (befo</tspan><tspan class="cls-52" x="180.71" y="60">r</tspan><tspan x="183.95" y="60">e June 2018): Co</tspan><tspan class="cls-59" x="257.62" y="60">p</tspan><tspan x="263.06" y="60">y Deed of Incorpo</tspan><tspan class="cls-13" x="339.55" y="60">r</tspan><tspan x="342.69" y="60">ation (Akta </tspan><tspan class="cls-58" x="392.77" y="60">P</tspan><tspan x="398.87" y="60">endirian), Co</tspan><tspan class="cls-59" x="453.61" y="60">p</tspan><tspan x="459.05" y="60">y of Company </tspan><tspan x="0" y="72">NPW</tspan><tspan class="cls-62" x="21.78" y="72">P</tspan><tspan x="26.37" y="72">, Co</tspan><tspan class="cls-59" x="42.71" y="72">p</tspan><tspan x="48.15" y="72">y of ID/</tspan><tspan class="cls-59" x="79.84" y="72">P</tspan><tspan x="85.95" y="72">asspo</tspan><tspan class="cls-57" x="112.45" y="72">r</tspan><tspan x="116.03" y="72">t</tspan><tspan class="cls-63" x="119.24" y="72">’</tspan><tspan x="120.68" y="72">s Di</tspan><tspan class="cls-52" x="137" y="72">r</tspan><tspan x="140.23" y="72">ec</tspan><tspan class="cls-53" x="150.55" y="72">t</tspan><tspan x="153.67" y="72">or</tspan></text>
      <circle class="cls-64" cx="22.57" cy="730.57" r="1.69"/>
      <circle class="cls-64" cx="22.57" cy="766.79" r="1.69"/>
      <circle class="cls-64" cx="22.57" cy="779.31" r="1.69"/>
      <circle class="cls-64" cx="22.57" cy="790.83" r="1.69"/>
      <text class="cls-65" transform="translate(185.96 119.66)">{{form_no}}</text>
      <text class="cls-65" transform="translate(435.34 119.66)">{{<tspan class="cls-52" x="8.12" y="0">r</tspan><tspan x="12.07" y="0">equest_date}}</tspan></text>
      <text class="cls-65" transform="translate(435.34 142.94)">{{ag<tspan class="cls-52" x="21.38" y="0">r</tspan><tspan x="25.33" y="0">eement_no}}</tspan></text>
      <text class="cls-65" transform="translate(435.34 165.62)">{{email}}</text>
      <text class="cls-65" transform="translate(185.96 142.94)">{{company_name}}</text>
      <text class="cls-65" transform="translate(185.96 165.87)">{{tenant_PI<tspan class="cls-66" x="58.34" y="0">C</tspan><tspan x="66.05" y="0">}}</tspan></text>
      <text class="cls-65" transform="translate(185.96 189.15)">{{tenant_tel}}</text>
      <text class="cls-65" transform="translate(185.96 211.83)">{{action}}</text>
      <text class="cls-5" transform="translate(177.7 296.31)">{{tenant_tel}}</text>
      <text class="cls-5" transform="translate(177.7 323.97)">{{action}}</text>
      <text class="cls-5" transform="translate(177.7 352.3)">{{tenant_tel}}</text>
      <text class="cls-5" transform="translate(177.7 379.96)">{{cur<tspan class="cls-44" x="22.99" y="0">r</tspan><tspan x="26.61" y="0">ent_montly_pr}}</tspan></text>
      <text class="cls-5" transform="translate(177.7 408.16)">{{cur<tspan class="cls-44" x="22.99" y="0">r</tspan><tspan x="26.61" y="0">ent_deposit}}</tspan></text>
      <text class="cls-5" transform="translate(437.34 295.31)">{{New_<tspan class="cls-53" x="34.34" y="0">r</tspan><tspan x="37.96" y="0">oom_no}}</tspan></text>
      <text class="cls-5" transform="translate(437.34 322.97)">{{New_lease_p<tspan class="cls-44" x="71.46" y="0">r</tspan><tspan x="75.08" y="0">d}}</tspan></text>
      <text class="cls-5" transform="translate(437.34 351.3)">{{new_monthly_p<tspan class="cls-18" x="83.21" y="0">r</tspan><tspan x="86.83" y="0">d}}</tspan></text>
      <text class="cls-5" transform="translate(437.34 378.96)">{{new_deposit}}</text>
      <text class="cls-5" transform="translate(437.34 407.16)">{{new_ad<tspan class="cls-26" x="44.76" y="0">v</tspan><tspan x="50" y="0">ance_</tspan><tspan class="cls-67" x="78.61" y="0">p</tspan><tspan x="84.72" y="0">ym}}</tspan></text>
      <text class="cls-5" transform="translate(177.7 435.82)">{{cur<tspan class="cls-44" x="22.99" y="0">r</tspan><tspan x="26.61" y="0">ent_ad</tspan><tspan class="cls-35" x="59.25" y="0">v</tspan><tspan x="64.5" y="0">ance}}</tspan></text>
      <text class="cls-5" transform="translate(177.7 463.35)">{{cur<tspan class="cls-44" x="22.99" y="0">r</tspan><tspan x="26.61" y="0">ent_p</tspan><tspan class="cls-35" x="53.23" y="0">a</tspan><tspan class="cls-10" x="59.14" y="0">yment}}</tspan></text>
      <text class="cls-5" transform="translate(177.7 491.55)">{{cur<tspan class="cls-44" x="22.99" y="0">r</tspan><tspan x="26.61" y="0">ent_p</tspan><tspan class="cls-35" x="53.23" y="0">a</tspan><tspan class="cls-10" x="59.14" y="0">yment_sch}}</tspan></text>
      <text class="cls-5" transform="translate(177.7 519.21)">{{<tspan class="cls-44" x="7.44" y="0">r</tspan><tspan class="cls-33" x="11.06" y="0">emarks}}</tspan></text>
    </svg>`;

  SVGtoPDF(doc, svg, 0, 0);

  // Upload to S3
  var filename = `${ctx.request.body.data.form_no}_${ctx.request.body.data.request_date}.pdf`;
  var PDFfile = ctx.res.pipe(doc);
  let upload = new Promise(function(resolve, reject) {
    s3.upload({ Body: PDFfile, Key: filename, ACL: 'public-read' })
    .on('httpUploadProgress', function (evt) { 
      console.log(evt); 
    })
    .send(function (err, data) { 
      console.log(err, data); 
      resolve(data)
    });
  });

  doc.end();
  let result = await upload;
  ctx.response.set('Content-Type', 'application/json');
  ctx.body = { data: { "url": result.Location }}          
  await next();
}

module.exports = { generateRelocation };
