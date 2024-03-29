/* eslint-disable @stylistic/max-len */
/* eslint-disable max-lines-per-function */
import React from "react";

import "./ProgressionCircle.scss";

const ProgressionCircle: React.FC<{"progression": number}> = ({progression}) => {
    return (
        <svg
            className="progression-svg"
            height="175.65547mm"
            viewBox="0 0 350.01374 175.65547"
            width="350.01373mm"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className={`progression ${
                    progression / 5 >= 20
                        ? "progression-fill"
                        : "progression-empty"
                }`}
                d="m 324.75935,175.03045 h 24.60625 l -0.52917,-14.55209 -10.05416,0.79375 -9.26042,0.70565 -3.70417,0.3085 -1.4552,0.35296 0.13229,3.13081 0.26458,9.26042"
            />
            <path
                className={`progression ${
                    progression / 5 >= 19
                        ? "progression-fill"
                        : "progression-empty"
                }`}
                d="m 347.24893,146.98461 -2.02935,-9.78958 -1.14565,-4.49792 -17.19791,4.27752 -4.23334,1.01415 -1.98437,0.61727 0.30956,2.82231 1.36525,6.87917 0.88371,2.60165 2.07169,-0.17621 4.49791,-0.74983 11.90625,-1.94019 5.55625,-1.05834"
            />
            <path
                className={`progression ${
                    progression / 5 >= 18
                        ? "progression-fill"
                        : "progression-empty"
                }`}
                d="m 312.8531,115.4992 1.50019,4.7625 2.73314,7.40833 7.67292,-2.46936 15.61042,-5.20356 -3.61686,-10.31875 -1.67481,-3.39539 -1.85208,0.66145 -3.70417,1.5875 -11.1125,4.67413 -5.55625,2.29315"
            />
            <path
                className={`progression ${
                    progression / 5 >= 17
                        ? "progression-fill"
                        : "progression-empty"
                }`}
                d="m 301.47602,94.33253 1.50019,2.91042 3.21733,5.55625 1.89706,2.55772 3.43958,-1.71979 8.46667,-4.49791 7.14375,-3.70417 2.20398,-1.3671 -1.62983,-3.439587 -5.33665,-9.260416 -6.87917,4.145227 -14.02291,8.819356"
            />
            <path
                className={`progression ${
                    progression / 5 >= 16
                        ? "progression-fill"
                        : "progression-empty"
                }`}
                d="m 304.9156,59.275238 c -1.28852,0.580496 -2.37596,2.096559 -3.43958,2.998523 -3.22527,2.733146 -6.23358,5.770827 -9.525,8.422746 -1.27,1.022615 -2.52677,2.134394 -3.70417,3.263106 -0.32544,0.31168 -0.88106,0.651934 -1.01335,1.102519 -0.24077,0.813858 0.8546,1.774825 1.32291,2.337065 1.53194,1.838325 3.04007,3.692789 4.54025,5.55625 0.49478,0.612775 1.4023,2.197629 2.29394,1.896268 1.44992,-0.490537 3.00567,-2.2098 4.23333,-3.131079 l 10.05417,-7.540625 3.175,-2.38125 c 0.46038,-0.345281 1.22502,-0.713581 1.45521,-1.278731 0.35983,-0.889529 -1.02923,-2.017712 -1.50019,-2.645833 -1.70127,-2.268538 -3.55864,-4.409811 -5.334,-6.614584 -0.508,-0.630237 -1.61131,-2.411412 -2.55852,-1.984375"
            />
            <path
                className={`progression ${
                    progression / 5 >= 15
                        ? "progression-fill"
                        : "progression-empty"
                }`}
                d="m 284.80727,39.960655 -3.5269,4.101042 -8.20208,10.054166 -2.38125,2.910417 -0.92604,1.322917 1.8071,2.160852 5.29167,4.718314 2.38125,1.455209 3.70417,-3.571875 9.26041,-9.789584 2.64584,-2.645833 0.97102,-1.322917 -2.29394,-2.469356 -5.82083,-5.20356 -2.91042,-1.719792"
            />
            <path
                className={`progression ${
                    progression / 5 >= 14
                        ? "progression-fill"
                        : "progression-empty"
                }`}
                d="m 262.0531,23.68878 -3.2631,5.291667 -5.82084,10.054166 -2.11666,3.704167 -0.92604,2.116667 1.80789,1.499393 6.08542,3.836459 2.64583,1.366837 1.14565,-1.411023 2.38125,-3.439583 7.32102,-10.583333 2.91042,-4.7625 -12.17084,-7.672917"
            />
            <path
                className={`progression ${
                    progression / 5 >= 13
                        ? "progression-fill"
                        : "progression-empty"
                }`}
                d="m 236.38852,11.78253 -5.64436,15.08125 -2.82231,7.9375 8.46667,3.52769 3.175,1.102518 0.83794,-1.455208 1.32291,-2.645833 6.08542,-12.964584 1.5875,-3.175 0.35269,-1.807977 -3.30729,-1.675712 -6.35,-2.645833 -3.70417,-1.278811"
            />
            <path
                className={`progression ${
                    progression / 5 >= 12
                        ? "progression-fill"
                        : "progression-empty"
                }`}
                d="m 204.63851,27.922113 7.67292,1.94019 4.7625,1.23481 6.87916,-23.5479165 -10.31875,-2.734019 -3.92456,-0.573273 -0.57335,1.719792 -0.88186,4.4979165 -3.61606,17.4625"
            />
            <path
                className={`progression ${
                    progression / 5 >= 11
                        ? "progression-fill"
                        : "progression-empty"
                }`}
                d="m 180.82602,25.27628 12.7,0.79375 0.79375,-6.085417 1.32292,-11.9062505 0.79375,-6.3499997 -7.67292,-0.79374997 h -2.91042 l -3.92456,-0.1322916 -0.30877,1.45520827 v 4.233333 L 180.82602,25.27628"
            />
            <path
                className={`progression ${
                    progression / 5 >= 10
                        ? "progression-fill"
                        : "progression-empty"
                }`}
                d="m 153.83852,1.7283628 2.11667,17.9916672 0.52917,4.233333 0.22039,1.807898 2.42544,0.308769 7.67292,-0.705644 2.51354,-0.396875 -0.0442,-2.072481 -0.0881,-3.96875 -0.79374,-18.25625047 -14.55209,1.05833327"
            />
            <path
                className={`progression ${
                    progression / 5 >= 9
                        ? "progression-fill"
                        : "progression-empty"
                }`}
                d="m 126.32185,7.5491965 3.88064,13.4937505 2.99852,10.054166 8.73125,-2.160852 3.30729,-1.058333 -0.13229,-1.807898 -0.97022,-4.497917 -3.52769,-17.4625005 -9.525,2.028481 -4.7625,1.411103"
            />
            <path
                className={`progression ${
                    progression / 5 >= 8
                        ? "progression-fill"
                        : "progression-empty"
                }`}
                d="m 100.1281,17.33878 2.86623,6.35 5.64462,12.170833 1.8079,3.704167 3.43958,-1.278731 5.55625,-2.337329 2.73394,-1.411023 -0.35269,-1.322917 -1.41102,-3.704167 -4.85087,-12.7 -1.36684,-3.704166 -0.61754,-1.190625 -3.3954,1.102439 -10.05416,4.321519"
            />
            <path
                className={`progression ${
                    progression / 5 >= 7
                        ? "progression-fill"
                        : "progression-empty"
                }`}
                d="m 89.809362,51.734613 7.937503,-4.938977 2.601645,-1.940189 -2.248955,-4.233334 -6.87917,-11.90625 -2.116666,-3.704166 -0.881857,-1.14644 -2.645833,1.322917 -7.14375,4.497916 -2.337064,2.204773 0.926042,1.5875 2.557462,3.704167 6.967537,10.054167 3.263106,4.497916"
            />
            <path
                className={`progression ${
                    progression / 5 >= 6
                        ? "progression-fill"
                        : "progression-empty"
                }`}
                d="m 64.93853,39.56378 -8.202083,7.14375 -2.293144,2.645833 3.351477,3.96875 9.525,9.789584 2.645833,2.910416 1.322917,0.749565 3.175,-2.601648 6.085416,-5.291667 L 76.932886,53.85128 68.730803,43.797113 64.93853,39.56378"
            />
            <path
                className={`progression ${
                    progression / 5 >= 5
                        ? "progression-fill"
                        : "progression-empty"
                }`}
                d="m 35.569781,70.52003 11.906249,8.907727 7.408333,5.644356 c 2.576513,-1.49172 4.572265,-5.091906 6.438106,-7.408333 0.48604,-0.60325 1.958446,-1.740694 1.631686,-2.645833 -0.361686,-1.001448 -1.764242,-1.704711 -2.513542,-2.38125 -2.2733,-2.052109 -4.607718,-4.034632 -6.879166,-6.085417 -2.189956,-1.977231 -4.317471,-4.058708 -6.614583,-5.90894 -0.555625,-0.447675 -1.307042,-1.58062 -2.116667,-1.455208 -0.938742,0.145256 -1.913202,1.911085 -2.469356,2.601648 -1.574006,1.953948 -3.219715,3.837252 -4.7625,5.820833 -0.735542,0.945357 -1.589881,1.799167 -2.02856,2.910417"
            />
            <path
                className={`progression ${
                    progression / 5 >= 4
                        ? "progression-fill"
                        : "progression-empty"
                }`}
                d="m 27.896864,81.367947 -5.335772,8.995833 -1.807978,3.96875 4.497917,2.33706 11.90625,6.17379 5.291666,2.60165 4.586023,-7.9375 1.455208,-2.91042 -1.278731,-1.23481 -3.704167,-2.292876 -10.847916,-6.879167 -4.7625,-2.82231"
            />
            <path
                className={`progression ${
                    progression / 5 >= 3
                        ? "progression-fill"
                        : "progression-empty"
                }`}
                d="m 14.932281,106.23878 -1.631606,3.70417 -3.6600605,9.78958 9.2604165,3.26311 14.022916,4.67439 2.204773,-5.55625 2.293144,-6.35 -11.1125,-4.80669 -6.879166,-2.91041 -4.497917,-1.8079"
            />
            <path
                className={`progression ${
                    progression / 5 >= 2
                        ? "progression-fill"
                        : "progression-empty"
                }`}
                d="m 5.9364476,132.69711 -1.9402689,8.99584 -0.9701477,5.55625 6.3499995,0.97022 10.5833335,1.67561 7.408333,1.05833 2.38125,-12.43541 -23.8124994,-5.82084"
            />
            <path
                className={`progression ${
                    progression / 5 >= 1
                        ? "progression-fill"
                        : "progression-empty"
                }`}
                d="m 1.438531,160.47838 -0.52916656,6.08542 -0.2645833,8.20208 7.67291636,0.26459 H 25.515614 l 0.264584,-12.7 -24.341667,-1.85209"
            />
        </svg>
    );
};

export default ProgressionCircle;
