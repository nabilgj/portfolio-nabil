import React from "react"

import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"

const WorkingImage = () => {
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <div>
      <svg
        maxwidth={matchesMD ? "600" : "736"}
        height={matchesMD ? "330" : "526"}
        viewBox="0 0 736 526"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="working 1">
          <g id="plus3">
            <path
              id="Vector"
              opacity="0.5"
              d="M154.989 419.507H152.523V433.482H154.989V419.507Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_2"
              opacity="0.5"
              d="M160.742 427.728V425.261H146.771V427.728H160.742Z"
              fill="#3F3D56"
            />
          </g>
          <g id="plus 2">
            <path
              id="Vector_3"
              opacity="0.5"
              d="M423.717 0H421.251V13.9757H423.717V0Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_4"
              opacity="0.5"
              d="M429.469 8.22103V5.75473L415.499 5.75473V8.22103H429.469Z"
              fill="#3F3D56"
            />
          </g>
          <g id="plus1">
            <path
              id="Vector_5"
              opacity="0.5"
              d="M730.247 102.763H727.782V116.738H730.247V102.763Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_6"
              opacity="0.5"
              d="M736 110.984V108.517H722.029V110.984H736Z"
              fill="#3F3D56"
            />
          </g>
          <path
            id="star4"
            opacity="0.5"
            d="M296.085 418.114C295.406 417.818 294.859 417.282 294.549 416.609C294.238 415.936 294.186 415.172 294.403 414.463C294.438 414.354 294.46 414.241 294.468 414.128V414.128C294.488 413.803 294.403 413.48 294.225 413.208C294.047 412.935 293.786 412.727 293.481 412.614C293.176 412.502 292.842 412.49 292.53 412.582C292.218 412.674 291.944 412.864 291.748 413.124V413.124C291.68 413.216 291.624 413.316 291.58 413.421C291.284 414.101 290.749 414.648 290.076 414.958C289.403 415.269 288.639 415.321 287.931 415.104C287.822 415.069 287.71 415.047 287.596 415.039V415.039C287.271 415.019 286.949 415.104 286.676 415.282C286.404 415.46 286.196 415.721 286.083 416.026C285.97 416.332 285.959 416.665 286.051 416.978C286.143 417.29 286.332 417.564 286.592 417.76C286.684 417.828 286.784 417.884 286.89 417.928C287.569 418.224 288.116 418.759 288.426 419.433C288.736 420.106 288.788 420.87 288.572 421.579C288.537 421.687 288.515 421.8 288.506 421.914V421.914C288.487 422.239 288.572 422.561 288.75 422.834C288.928 423.106 289.189 423.314 289.494 423.427C289.799 423.54 290.132 423.551 290.445 423.459C290.757 423.367 291.031 423.178 291.227 422.918V422.918C291.294 422.826 291.351 422.726 291.395 422.62C291.69 421.941 292.226 421.394 292.899 421.083C293.572 420.773 294.335 420.721 295.044 420.937C295.153 420.972 295.265 420.994 295.379 421.003V421.003C295.704 421.023 296.026 420.937 296.299 420.759C296.571 420.581 296.779 420.32 296.892 420.015C297.004 419.71 297.016 419.376 296.924 419.064C296.832 418.752 296.642 418.477 296.383 418.281V418.281C296.29 418.214 296.191 418.158 296.085 418.114V418.114Z"
            fill="#4D8AF0"
          />
          <path
            id="star3"
            opacity="0.5"
            d="M416.231 520.589C415.551 520.293 415.004 519.758 414.694 519.084C414.384 518.411 414.332 517.647 414.548 516.938C414.583 516.829 414.605 516.717 414.614 516.603V516.603C414.633 516.278 414.548 515.956 414.37 515.683C414.192 515.411 413.932 515.203 413.626 515.09C413.321 514.977 412.988 514.966 412.676 515.058C412.363 515.149 412.089 515.339 411.893 515.599V515.599C411.826 515.691 411.77 515.791 411.726 515.897C411.43 516.576 410.894 517.123 410.221 517.434C409.548 517.744 408.785 517.796 408.076 517.58C407.967 517.545 407.855 517.523 407.741 517.514V517.514C407.416 517.494 407.094 517.58 406.821 517.758C406.549 517.936 406.341 518.197 406.228 518.502C406.116 518.807 406.105 519.141 406.196 519.453C406.288 519.765 406.478 520.04 406.737 520.236C406.83 520.303 406.929 520.359 407.035 520.403C407.714 520.699 408.261 521.235 408.571 521.908C408.882 522.581 408.934 523.345 408.717 524.054C408.682 524.163 408.66 524.275 408.652 524.389C408.632 524.714 408.717 525.037 408.895 525.309C409.073 525.582 409.334 525.79 409.639 525.903C409.944 526.015 410.278 526.026 410.59 525.935C410.902 525.843 411.176 525.653 411.372 525.393C411.44 525.301 411.496 525.201 411.54 525.096C411.836 524.416 412.371 523.869 413.044 523.559C413.717 523.248 414.481 523.196 415.189 523.413C415.298 523.448 415.411 523.47 415.524 523.478C415.849 523.498 416.172 523.413 416.444 523.235C416.717 523.057 416.924 522.796 417.037 522.491C417.15 522.185 417.161 521.852 417.069 521.539C416.978 521.227 416.788 520.953 416.528 520.757C416.436 520.689 416.336 520.633 416.231 520.589V520.589Z"
            fill="#4D8AF0"
          />
          <path
            id="star2"
            opacity="0.5"
            d="M10.0996 173.714C9.42022 173.418 8.87334 172.883 8.56307 172.21C8.25281 171.536 8.20082 170.772 8.41701 170.063C8.452 169.955 8.47404 169.842 8.48268 169.728C8.50245 169.403 8.4171 169.081 8.23926 168.808C8.06143 168.536 7.80057 168.328 7.49532 168.215C7.19008 168.103 6.85668 168.091 6.54452 168.183C6.23235 168.275 5.95802 168.465 5.76216 168.724V168.724C5.6948 168.817 5.63856 168.916 5.59459 169.022C5.29869 169.702 4.76331 170.249 4.09033 170.559C3.41736 170.869 2.6538 170.921 1.94499 170.705C1.83632 170.67 1.7239 170.648 1.61007 170.639V170.639C1.28532 170.62 0.962846 170.705 0.690399 170.883C0.417951 171.061 0.210026 171.322 0.0974241 171.627C-0.0151776 171.932 -0.0264697 172.266 0.0652223 172.578C0.156914 172.891 0.346717 173.165 0.606508 173.361V173.361C0.698685 173.428 0.798484 173.485 0.903836 173.529C1.58325 173.825 2.13014 174.36 2.44041 175.033C2.75067 175.707 2.80266 176.47 2.58646 177.179C2.55147 177.288 2.52942 177.401 2.52079 177.515C2.50102 177.839 2.58638 178.162 2.76422 178.435C2.94205 178.707 3.20291 178.915 3.50816 179.028C3.8134 179.14 4.14679 179.152 4.45895 179.06C4.77111 178.968 5.04544 178.778 5.2413 178.518C5.30865 178.426 5.3649 178.326 5.40887 178.221C5.70476 177.541 6.24015 176.994 6.91312 176.684C7.58609 176.374 8.34967 176.321 9.05848 176.538C9.16714 176.573 9.27955 176.595 9.39339 176.603V176.603C9.71813 176.623 10.0406 176.538 10.3131 176.36C10.5855 176.182 10.7934 175.921 10.906 175.616C11.0186 175.31 11.0299 174.977 10.9382 174.665C10.8465 174.352 10.6567 174.078 10.397 173.882V173.882C10.3048 173.815 10.205 173.758 10.0996 173.714V173.714Z"
            fill="#4D8AF0"
          />
          <path
            id="star1"
            opacity="0.5"
            d="M721.118 298.622C720.438 298.326 719.891 297.79 719.581 297.117C719.271 296.444 719.219 295.68 719.435 294.971C719.47 294.862 719.492 294.75 719.501 294.636V294.636C719.52 294.311 719.435 293.989 719.257 293.716C719.079 293.443 718.819 293.235 718.513 293.123C718.208 293.01 717.875 292.999 717.563 293.091C717.25 293.182 716.976 293.372 716.78 293.632V293.632C716.713 293.724 716.657 293.824 716.613 293.93C716.317 294.609 715.781 295.156 715.108 295.467C714.435 295.777 713.672 295.829 712.963 295.613C712.854 295.578 712.742 295.556 712.628 295.547V295.547C712.303 295.527 711.981 295.613 711.708 295.791C711.436 295.968 711.228 296.229 711.115 296.535C711.003 296.84 710.992 297.174 711.083 297.486C711.175 297.798 711.365 298.073 711.625 298.269V298.269C711.717 298.336 711.817 298.392 711.922 298.436C712.601 298.732 713.148 299.268 713.458 299.941C713.769 300.614 713.821 301.378 713.604 302.087C713.57 302.196 713.547 302.308 713.539 302.422V302.422C713.519 302.747 713.604 303.07 713.782 303.342C713.96 303.615 714.221 303.823 714.526 303.935C714.831 304.048 715.165 304.059 715.477 303.968C715.789 303.876 716.063 303.686 716.259 303.426C716.327 303.334 716.383 303.234 716.427 303.129C716.723 302.449 717.258 301.902 717.931 301.592C718.604 301.281 719.368 301.229 720.076 301.445C720.185 301.48 720.298 301.503 720.411 301.511V301.511C720.736 301.531 721.059 301.446 721.331 301.268C721.603 301.09 721.811 300.829 721.924 300.523C722.037 300.218 722.048 299.885 721.956 299.572C721.865 299.26 721.675 298.986 721.415 298.79V298.79C721.323 298.722 721.223 298.666 721.118 298.622V298.622Z"
            fill="#4D8AF0"
          />
          <path
            id="circle4"
            opacity="0.5"
            d="M88.4233 379.224C91.1465 379.224 93.3541 377.015 93.3541 374.291C93.3541 371.567 91.1465 369.359 88.4233 369.359C85.7001 369.359 83.4925 371.567 83.4925 374.291C83.4925 377.015 85.7001 379.224 88.4233 379.224Z"
            fill="#F55F44"
          />
          <path
            id="circle3"
            opacity="0.5"
            d="M264.288 9.86521C267.011 9.86521 269.219 7.65681 269.219 4.9326C269.219 2.2084 267.011 0 264.288 0C261.565 0 259.357 2.2084 259.357 4.9326C259.357 7.65681 261.565 9.86521 264.288 9.86521Z"
            fill="#4D8AF0"
          />
          <path
            id="circle2"
            opacity="0.5"
            d="M381.146 381.403C383.869 381.403 386.077 379.195 386.077 376.47C386.077 373.746 383.869 371.538 381.146 371.538C378.423 371.538 376.215 373.746 376.215 376.47C376.215 379.195 378.423 381.403 381.146 381.403Z"
            fill="#47E6B1"
          />
          <path
            id="circle1"
            opacity="0.5"
            d="M665.488 504.718C668.211 504.718 670.419 502.51 670.419 499.786C670.419 497.061 668.211 494.853 665.488 494.853C662.765 494.853 660.557 497.061 660.557 499.786C660.557 502.51 662.765 504.718 665.488 504.718Z"
            fill="#F55F44"
          />
          <g id="left-mobile1">
            <path
              id="Vector_7"
              d="M211.146 3.6837L65.9883 36.5476C60.0409 37.8941 56.3106 43.8088 57.6567 49.7584L107.567 270.371C108.913 276.321 114.825 280.053 120.773 278.706L265.931 245.842C271.878 244.496 275.608 238.581 274.262 232.631L224.352 12.0184C223.006 6.06877 217.094 2.33718 211.146 3.6837Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_8"
              d="M71.9873 76.4554C74.7105 76.4554 76.9181 74.247 76.9181 71.5228C76.9181 68.7986 74.7105 66.5901 71.9873 66.5901C69.2641 66.5901 67.0565 68.7986 67.0565 71.5228C67.0565 74.247 69.2641 76.4554 71.9873 76.4554Z"
              fill="white"
            />
            <path
              id="Vector_9"
              d="M76.9181 94.5416C79.6413 94.5416 81.8489 92.3332 81.8489 89.609C81.8489 86.8848 79.6413 84.6764 76.9181 84.6764C74.1949 84.6764 71.9873 86.8848 71.9873 89.609C71.9873 92.3332 74.1949 94.5416 76.9181 94.5416Z"
              fill="white"
            />
            <path
              id="Vector_10"
              d="M108.968 226.9C111.691 226.9 113.899 224.691 113.899 221.967C113.899 219.243 111.691 217.035 108.968 217.035C106.245 217.035 104.037 219.243 104.037 221.967C104.037 224.691 106.245 226.9 108.968 226.9Z"
              fill="white"
            />
            <path
              id="Vector_11"
              d="M113.899 244.986C116.622 244.986 118.83 242.778 118.83 240.053C118.83 237.329 116.622 235.121 113.899 235.121C111.176 235.121 108.968 237.329 108.968 240.053C108.968 242.778 111.176 244.986 113.899 244.986Z"
              fill="white"
            />
            <path
              id="Vector_12"
              d="M210.533 95.4328L110.442 118.094L114.217 134.782L214.309 112.121L210.533 95.4328Z"
              fill="#F5F5F5"
            />
          </g>
          <g id="left-mobile2">
            <path
              id="Vector_13"
              d="M343.365 88.0025L176.67 125.742L231.454 367.901L398.15 330.161L343.365 88.0025Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_14"
              d="M312.436 122.562L212.345 145.223L216.12 161.911L316.212 139.25L312.436 122.562Z"
              fill="#F5F5F5"
            />
            <path
              id="Vector_15"
              d="M338.242 159.115L204.787 189.329L205.73 193.501L339.186 163.287L338.242 159.115Z"
              fill="#F5F5F5"
            />
            <path
              id="Vector_16"
              d="M340.444 168.85L206.989 199.064L207.933 203.236L341.388 173.022L340.444 168.85Z"
              fill="#F5F5F5"
            />
            <path
              id="Vector_17"
              d="M342.647 178.584L209.191 208.799L210.135 212.971L343.591 182.756L342.647 178.584Z"
              fill="#F5F5F5"
            />
            <path
              id="Vector_18"
              d="M275.341 204.056L211.394 218.533L212.337 222.705L276.285 208.228L275.341 204.056Z"
              fill="#F5F5F5"
            />
            <path
              id="Vector_19"
              d="M287.274 211.587L213.596 228.268L214.54 232.44L288.218 215.759L287.274 211.587Z"
              fill="#F5F5F5"
            />
            <path
              id="Vector_20"
              d="M349.254 207.788L215.798 238.003L216.742 242.175L350.198 211.96L349.254 207.788Z"
              fill="#F5F5F5"
            />
            <path
              id="Vector_21"
              d="M351.456 217.523L218.001 247.738L218.944 251.91L352.4 221.695L351.456 217.523Z"
              fill="#F5F5F5"
            />
            <path
              id="Vector_22"
              d="M343.927 229.461L220.203 257.472L221.147 261.644L344.871 233.633L343.927 229.461Z"
              fill="#F5F5F5"
            />
            <path
              id="Vector_23"
              d="M355.861 236.993L222.405 267.207L223.349 271.379L356.805 241.165L355.861 236.993Z"
              fill="#F5F5F5"
            />
            <path
              id="Vector_24"
              d="M294.116 261.205L224.608 276.942L225.551 281.114L295.059 265.377L294.116 261.205Z"
              fill="#F5F5F5"
            />
            <path
              id="Vector_25"
              d="M359.058 264.045L278.429 282.299L291.013 337.926L371.643 319.672L359.058 264.045Z"
              fill="#F5F5F5"
            />
          </g>
          <g id="right-mobile2">
            <path
              id="Vector_26"
              d="M519.153 48.204L352.458 85.944L407.242 328.103L573.938 290.363L519.153 48.204Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_27"
              opacity="0.3"
              d="M481.524 230.471L407.845 247.152L408.789 251.324L482.468 234.643L481.524 230.471Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_28"
              opacity="0.3"
              d="M543.503 226.672L410.048 256.886L410.992 261.058L544.447 230.844L543.503 226.672Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_29"
              opacity="0.3"
              d="M545.706 236.407L412.25 266.621L413.194 270.793L546.65 240.579L545.706 236.407Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_30"
              opacity="0.3"
              d="M538.177 248.345L414.452 276.356L415.396 280.528L539.121 252.517L538.177 248.345Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_31"
              opacity="0.3"
              d="M550.11 255.876L416.655 286.091L417.599 290.263L551.054 260.048L550.11 255.876Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_32"
              opacity="0.3"
              d="M454.496 78.7044L373.867 96.959L386.452 152.586L467.081 134.331L454.496 78.7044Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_33"
              opacity="0.3"
              d="M533.414 136.856L452.784 155.111L465.369 210.738L545.998 192.483L533.414 136.856Z"
              fill="#6C63FF"
            />
          </g>
          <g id="right-mobile1">
            <path
              id="Vector_34"
              d="M571.094 108.09L425.936 140.954C419.988 142.301 416.258 148.216 417.604 154.165L467.514 374.778C468.86 380.728 474.773 384.459 480.72 383.113L625.878 350.249C631.826 348.903 635.556 342.988 634.21 337.038L584.3 116.425C582.954 110.476 577.041 106.744 571.094 108.09Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_35"
              d="M431.935 180.862C434.658 180.862 436.866 178.654 436.866 175.93C436.866 173.205 434.658 170.997 431.935 170.997C429.212 170.997 427.004 173.205 427.004 175.93C427.004 178.654 429.212 180.862 431.935 180.862Z"
              fill="white"
            />
            <path
              id="Vector_36"
              d="M436.866 198.948C439.589 198.948 441.796 196.74 441.796 194.016C441.796 191.292 439.589 189.083 436.866 189.083C434.142 189.083 431.935 191.292 431.935 194.016C431.935 196.74 434.142 198.948 436.866 198.948Z"
              fill="white"
            />
            <path
              id="Vector_37"
              d="M468.916 331.307C471.639 331.307 473.846 329.098 473.846 326.374C473.846 323.65 471.639 321.441 468.916 321.441C466.192 321.441 463.985 323.65 463.985 326.374C463.985 329.098 466.192 331.307 468.916 331.307Z"
              fill="white"
            />
            <path
              id="Vector_38"
              d="M473.846 349.393C476.57 349.393 478.777 347.184 478.777 344.46C478.777 341.736 476.57 339.528 473.846 339.528C471.123 339.528 468.916 341.736 468.916 344.46C468.916 347.184 471.123 349.393 473.846 349.393Z"
              fill="white"
            />
            <path
              id="Vector_39"
              d="M570.481 199.84L470.389 222.5L474.165 239.189L574.256 216.528L570.481 199.84Z"
              fill="#F5F5F5"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

// go into Banner
export default WorkingImage