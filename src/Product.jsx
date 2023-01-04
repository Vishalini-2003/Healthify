
import React, { useState } from 'react';
import './Product.css'
function Product() {
  const [products] = useState([
    { id: 1, name: 'Crocin 650', price: 9.99 ,imgadd:"data:image/jpeg;base64,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"},
    { id: 2, name: 'Zincovit', price: 19.99 ,imgadd:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIWFhUWGBgXGBgXGBcXFhgYHRcXGBUYFxoYHiggGRolHRgWITEiJSkrLi4uGB8zODMtNygtLi0BCgoKDg0OGxAQGi0lICUtLS0tLS0tMC0tLzUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAgQFBgEDBwj/xABIEAABAwIDBQUDCQUGBAcAAAABAAIRAyEEEjEFBkFRYRMiMnGRQoGxBxQjUmJyocHRFTOy4fA1Q1OCksIlNKLSFiRUc5PT8f/EABsBAQACAwEBAAAAAAAAAAAAAAADBQECBAYH/8QANhEAAQMCAwQJAwQCAwEAAAAAAQACEQMEITFBElFh8AUTMnGBobHB0SKR8QZCUuEUIzNiwhX/2gAMAwEAAhEDEQA/AO4oQhEQhCw5ETQY4cis/PhyKjgUsFbQtoT756ORWfnY5FMC4C5sstdxCQswn/zscln5yOSYArOZYhYhP/nIWPnI5JkXJJckJCenGDkVj56ORUbVfEXA8/In8kywW1KdYE0qjX5XAO7pGpganTW/RbbK1LmggE4nLirPTdIB5pa1YbwN8gtq0RCEKA3n2nUohjWA9+bgSbRbpqstBJgIp9YJVJbi6ztc3+Z381saX9P9Sl6riswrkCsql1M/T1W7ZWJrdsxsnKTfvSIiTZYNLCZSFbkIQolhCEIREIQhEQhCERCEIRELDllJdoiKECUm2MzZDl8Vo1vcSLAkSJEgEiZTTC1ndrEEDLJDnVTNx3h2jBppAPtCYspAJUika1MOEFMcbtanRaYOZzTBaIzTN1Iqmbd2FVzPryHBzjAbJMEmLR+a6bSnTqP2ajoGnHHLmFwdIVq9KltUWydeAjPjG5WfCbVpuph7nNZIuMw7vQrRsnbra7y1rIgEyekCI96rGH3ZrPaHS0SJiY9RwU5u5sR9Bzn1CJNgASbSCZt0C6K1C1YxxD5doN2K5Le5v6lSmHUtlv7jhiI8I7o4YKVxW1aFN2SpWYx1rOcAb6ap0SqnvK09o8NZUfmY0Oaz50A/UQTTHZ6E6kdVZ6NLK0NBJji4lzj5k3KrjlKulmq2Y0PQ+RH5pjs/ZVOiCKdMNDiC7vOJsbC40/VSCEkxC0LGkgkYjLgpfDeBvkFtWrDeBvkFtUawUKqb7UnO7HLVy3dLYJkQLiOMxrzVrVG+UHFim+k53aBuU3bEEzpof6KkpdpZbmmWC2a4GX1aj7m0NaIOgsJsn42Sx2bUTHEnQzz6Kr0t7sK3xOd78/8AJLG/eBAntLaTFTVTQBhKl6x8z7AegU3+yy0iH2GggxoBe/RL2JhKjK9PvCMw5jnb3yq4d/sAf74DzFQKZ3bxzMVUYaDnOAcJc3MWga3kW05pDYWXVXuGJXSEIQuVQIQhCIhCEIiEIQiIQhCIhYdospLtERVzHAmm6HBpjU6DzuLe8eYTTBVWh0u1sA7K8i5FhUzObBIFp1hOMVSeXNcwiwdZxcBmMZXGPFEGx5pOEwjmOFzlDMpJcS57u6c7gbAiHaTOboFIIhSJ3iCQxxGuUx5wqdhcdiexrOL35gWBk5puXaT5BXRRm8WLfSo52GCHD04z0XXaVIPV7IO0W58COGuqr7+jLet23NDWv7OsjPMZZjiqn+2cUPbd7wFNbq7Qq1HvFR8gMsDYTZa8HvfwqM94U9gNp0q09m6SLkEEELru3PaxzXUAOI08lW2DKb6rXsui6P2mcfAu9iq/tmg/5yX0qT3l2RpLa9TDNtJguFTLUIk90M4kK0UKhc0Oc0sJElpIJaeIkWKrx3Pp8Xk96WyymSxpf2j8lrVHOyzUMu7oVkVSV6IoQhCwsKXw3gb5BbVpwvgb5BblotChVH5VK+TZmI+0GN9XtH6q3LlvyzbUL6LcJS7xzh1TkIBgeplFvTbLwFw/C4ZrjMT5qbwGxqhh9OkCJLZLQWzlzEHNI8JlMKmGfTuVIYLeGrSaRSqObxN5B7pZZpETBcPI9FxSS7EmOCu2NYxkACeIUVi8O0eyBZdl+QF//l67ftMP4OXGTNR0AiT7l0/5Isb80qFlQw2qIJ4A+yfL9VvQmcVzXYaWktC7ahCF1KqQhCERCEIREIQhEQhCERCw7RZSXaIirG1KYNMkgEtg3aHWzDMBYxIkSAT0MQm+y8OGvJBYRBFonxSywaIgWOs20vLjajgKTiSQO7JsB4h4ptk+t9mU22PSgnvsMZrUyIhzy64k6TA5AnmpRkpTkpZMNs7R7Cn2mXNcNiY1np0T9MNs06RpE1vA0hxuRJ0AtfitqWyXjaEicQNVBX2+qdsGDBgnId6pG0do9ubUmtJPsi58xxVg3QwFWmXuewtDgAOBN58wmtDeelTtTwwDehEnztr7yrJs3aDK7M7PIg6g9Va3dSqyjsCnstPGfTLzVFYUqFS4601tuoOGyMo1AnPSN6eIQhUy9EhJQhYWVM4bwN8gitVaxpc5wa1okkmAANSSdAk0DDGk8vyXDt/vlCfXfkoGKcxSHAgH984cTxaDYWOoK1w1WGtLjgrBv98oxbNDCGHcXaEDgT9Xo3xHjAseb1MTVILM7i53jeSS5o4iTxP4ac1GCsQCW3cT4jcl3tPJOp1T7AucwQL+a5H3eyJaO75KtaVj+37n2Hzu70YiiG0iGi5honrqfSU0+ZSyDm8wPX3KXa1zzfQcOv8AUp12Flw1L4gAc+i7WWrRid0cFCYLCdyCNCQerSnOAJpnsnk9m7wOkgtnhI0HwTkkiYPQhN6pcRBOlxbRStv3zMYKN3R7CMOflXndXe+vhHClWe6pSs1uc6cgSfC7kfCeMG66tsvatPENzU3XHiabOaeRH56HgV5yobTcGljxMWvxbyPl8FN7qbyVKVVrA4g/3TtSOPZu+s0j4eRXdTuGvdsnPfzqq6tZODdoL0GhRmwtqNxNFtUCDo4cnDUeXHyIUmplXkQhCEIiEIQiIQhCIhJdolLBRFVtqvy0i7SIE6QC5odckAW4mw1NpSNmkSYc829p1Nw92QlK2kH5Rk1tNi45ZaXABrgZIBE8Fq2bUl5BzAxo4PHHXvuP5KXRSqSUDvqT836ZxPoYU8tGOwba1M036HlqDwI6qS3qinVa86Fc91SNai+m3MghVjA4LAmiDUdDo7xl0g8YaLHpYo3Gcc1YcIb63j802fuwbkV6RaDBMkQbWOoBuLTxVn2LsxtBkNOYuu53PlHT9VZ3NekKT2h5cXaHTXXL8CFS2drWdXpudSawMBkiPqkRpM/nGVIrCEKmXoVrdVAcGmBPhki5uSAOcCUqnVa6cpBgwYMweIPW6i94smRvaFwGbNDGy85QXd0+yBEl1rCJunGyKTWU+zDg5rHOYDlym1iHAaume9xseKi2zt7P554rpNECgKsmSYiMMOMeEcc5kB1vfULdm4kgkfQPEjW7Yt6rzCKhdUzHgIHTX9SvTG/f9lYj/wBn9F5nbhD9aP681HWcAIJzWbRjiZAmCpDDtFuik6cawVCDDvi1T4/qt5ZWtFQen81WPYHfuHn8K8Y5wHYPl8qyYOpq20G+gn11W15Eqv4XthMPH4rLnV/rj8VyOoye0OfBb7RmdkqZeAm1ZscVFl9f64/FYqGv9fh1WzaP/Yc+CztuH7Tz4pxWpCZWoU4c0gwWkEe64/EBNKja/wDiD0K1O7XKZq/hH5rqYwiCHjz+FE95gg0zHh8r0H8mFSaNX7zT78sfAD0V2VD+SVhGHfM6t18ir4rdvZC81V7ZQhCFlRoQhCIhCEIiFh2iyku0RFUdsYjKGjt2Ui6e67xVIiQyCHAjoDrokbIcS5xIJgQHEkiCbhuY5hoJlo4awnWMrubEUy+x01tEAW1MmJgWuQtGz8S5zzLGtGWRAOYX8NSbNdB0E6G+kyaKVSSgt8MW5lABpjO6CfswSR77D1U7Kid49nGvRhviaczRzsQR6H4Ka1LW1ml+UrlvGvdb1G08yDHPdKi8HsqqcC+mAMzy17ROolpHvhK3IxbnNfTJkNjL0mZHlYepUCcXi2DsZe0aZYIPlzjyVn3S2Y6kxz3iHPiGnUATE8iZ06K1u2llCp1jgdogtjwHoNMM8cVR2ThUuaXVMcNhpa6d2g+51g5YYKflCwsqiXplE7wUw9racPL3Zg0UyAYy/SZi62WDx6QnGyS3ISM85n5+0jP2mYh+bLbUcLREJvtsS+kGte58vLclXsi2GjMSY0vHvWdg0gGF30glz2lj358rg457xqXAyVAP+U4evA7onHerB0f4YBOsxhvcN8huGGHaBxyUhvcf+H1u7m+jFjF7ttey5js7AYd7Mxw9KRqJE6x7IK6fvb/Z1X7jf4mrnWAouY27gQbaAWa2NB1groaAc1wMcQMCnzNg4b28PTAEyQ51obm5C0LcNhYD/Dp6T4naE66pxVqxm7heILob4nfRxlA5lRVHa9Aip9DUaaWXMHOY2CXBoEufAIJmDyKmZamoJa2ftr/eCw+6LO08jxKlqWwMFMCnTn7x93tLA2Ngf8OncSJnSCZueTT6JzRGGDg0VGF4LgBnbmzTLhAMyOSRTw+Hc7sw9pe0FpaHjMBeQQDYXI0sDaFH1I/jxy5++S36938z9/7WkbIwH+FR/DjcceKP2bguFGibgWa12s68tD6Lb2mFdm+lpnIDm+kByjwnNBsOC0Y2th2ANblcXOpNIFSIa4HI65g2kgcVu2gZgN8ueSNFG6uYxd5/lK+aYQNc5lGgYaXWpt5cw34Jr28TlpMb91jz8GDol4LG06zKz6TSAM7SZM28JaJEAiTYg2CZVQ3iBwknJ/ue4z7luWFhLXCCFgODsQZV73MqFzahPNvwPUqyKtblfun+YH4eQ58lZVzP7S1KEIQtVhCEIREIQhEQku0Skl2iIqzjqjgw5JzWNhNpGaOGaJiePAwVrwNYuJntNP7wMHplAWNrtmi4TF2cvrtgCbFx0AMgkgEEWOrZVVpcQ0OBibsY3iR7AHEHXkpFIpNRO8m0nUKQLIzOsCbxaSY4/wA1KqA30LewEiTnEGYgwb9RFoU1o0OrsDhIlc169zLd7mmCAceeZhVv/wASYr/G/Bv6Kx7o7Rq1hU7V+bLkjuxE5p4dAonZm9JpU20+yzBtpmOM3tqrDsDa/wA4DzkDMpHGZmeg5K0vmltJ3+lrRh9QI3jSAce/VUnRr2urMJuXOOP0kPjsmRJJGHspZCEKjXpU3xeDbUgumWmWua5zXA6GHAgiUrCYZtNgYwQ0aC51Mkkm5JJJkrchY2RMxit+sds7EmN04fbLUpG9v9nVfuN/iauf0azS1t58VrzoSLW5LoG9n9nVfuN/iaueUfC2eZ0BPsu/rVbsWjck+bVe5pDXhroqgOizS0OaCeoj3wVF4fY73YV+HbiMM5ryCHAuzuqZ2O7xvPdMWHFqlNntBe0WcCawMi1ycwI4jh1Ut8yoNGc02DJL5DbgwJdbjDR6LqpXL6XYjMHLUZfjvUVWi15xnIjPfmoaru+WudWLmCMR25feRTEktnLrN40TbZ2CbTDQ6rh+zb2hFW5rGQecZTrz5Ke/bWHe0jPmEXhrzILiyRAkiQRI5Jo52CEuMeGc0VDLXHgRrJHBbm9rFuyT5cI9zwxyWv8AjsmYUfsbYMlk1KTmU6T6Y7KczxUzCak6am3MLZS2AaVEdrVbmFak8vgxDAGMb+MSn9La2DpNL2vytJMmKhEtyg2It42jrITqjtCjXJpjviMxBacvskTPG7SFl1/XcSSc403GfXE78NwWotaQ05iPQYf2mWzWsZTrhtdtRpLn92O4HyYJvOmvRNACRYPNxGUOA4zoGBStevSpuNNsNqOY58NaC7KyG5oGsFwAHFa8O1xIcX1LcHAMB9wErnc8uJJU7QG4BWzdGllpO+9+QU8obdf92775+DVMrndmVqc0IQharCEIQiIQhCIhYdospLtERVbaLHOZDY4Ey3NMOBgARexvqLQm+zgDUdoHAHu3BGZ0k5S4lskToJPNbNq5sndbP1pIDQ2RmmSLxMarTsioMzmtLQAJLQWEyTY93TQ6/kpNFKpHE1crXviYa50aTAJhVuvt+nVol9ShmAeBlLuJDjy6Ee9WTEtaWODhLS0gjmIMj0VXwVXA1foA1zQ4ggFzoJggDxawSuy0awtLnMcYIxE4DGciFXXr6gc1rXtbIIh0YnCMwcifHcUz/aOCOuEPuc7+Sn92qlAteaLMgkTcmbGNZWjGbvYWmx1QsfDReHX90rduwaGV/YBwEic0axaIXRcVKVSg409vMZkkZjP6j4cVyW1KtSuWtq9XrENAdkcvpHjwU2hRVPapNc0TTNjBcM7mju5hJyZQSIMTxClFUq8WUIWERJ3tP/Dqv3G/xNXPsKYb1738Lui6Bvd/Z1X7jf4mrnlJvctyPwcP6sFsxG5KU2c052TzqH3GS38FOZAQQRIIgjobFV6h42jpU+H81vw2MqnE1aJo5abWkteMw5RJ0Mzw0hZJhaPeGkTr/fwnw2PQnMKYB5gu0kmNbiSTGkklK/ZNGQ7s7iIu6LEkCJiJcT6cgnoWJWVsU0fsmidac9CXZfZ4TE91voFEbx7Yw+z6RqZR2jhlYwHvPIjUnRogSeAAGsBbt7N56WBpZ396o6ezpg3ceZ5NHE/E2XLmtq4qqcXijJPhboAPZtwaOA46nrNQoOqugeJ0A3lQXFwygzbf/Z4BTm5Pa1sRWxeIc41KlF4AacpDZYRlk93QRe2puVesPVYCBJzOyiC7OdLTFhxVY3VovHaYgtBbkcGtNg6978rQp/5zVIloa1seyCTo3i6G2k8DotDWo1STRxaDszvIzPCTpphkcFrZve+kH1MCZPhp+dc1e92R9E775+DVMKF3VaRQvrmM8eSmlA7NTHNCEIWqwhCEIiEIQiIWCspLtERVHalctDctWkySRFSQXW0YQ4EEeTvckbMLnOLnZiQ2AS1wEEgkNzOvoOAUi5gOoB8xKxTotbdrWg9AB8FupUnE+B33XfArl9Gg5wc5oJDR3o4DSfJdSrtlrgNSCPwVc3U2TVovearIBAAu0zfoVZ2FyKFKo6RP0wCYnu53Km6TtHXNakyDs/UCQJjKJ001Ubh94C7D1KNWScvddqT5qR3F/d1PvD4FN94N2jPaUGzOrRqOo6fDy0kNz8K+mx4ewtJI1BHDqp7h9A2rnUv3EEjcZE4fGC5rWndNvGNridlrgHYwQZ1+ccMU1wuIwr8cSGuFYucJPzcmWsLCSATWYMreIA053tKquzsNVbiWucysAatWDmzNyxV/enKDE5YbcXZDjBCtKpSvQrKEJntXaVLD0nVqzwxjRc/AAcXHQAIspxvf/ZtX7jf42rneBqZmC4Njoejp4jnw5K8bYxwr7H7cAtFWjTeAdQHOYQD6rnuByxJ1OhMTJgcwXCOTitm4I3JT2HH0lMGYObyNj/NTTaQ0v/qd+qhMA052agcBeIAIEgtEHU6lT4KyQsFbFVd898qWBblEPruHdZNhydU5N6an8RG78b+CgTh8KQ/EHul3ibTPL7VTpoOPJUfZ+yzmNfEOL6rjm7xkg8yeL/wC6KFuapJmAMSTkBzzqua5umUGy7PQalYw+FqYiocVi3FznXAP4Ejg0cGq07H2UcQ7M61JuvXoPzKNjbHdXOd8tpDj9b7I/Mq0V6rWNDWgAAQANF53pvp5pabOz7OrtTxPsNNRouewsKt7UFe47Og503nXuW1lQDM1pDQ2m7LwDQNDYGPRMjq1z3uMERJOUmREGpqfIfimeyMcatWrlnI2m4FwMSSWxBkRYOi45p1EEW5X4+K4LhrcnVx8ipeiLfZtWh41JXorrbt6mwMMBz9tNF0ndh00AeZd8VLqJ3XbGGZ5u/iKllYuzVUc0IQhaohCEIiEIQiISXaJSS7REUAFoxmKbSYXumAWiwk95waLeZC3rDmg2IBHW/ULdSqLo7wUXFre8C8uDZGsVGUjoTHeeNeAJ4LazbVE5rkFrXPIIOYNblDjA4d4f0Ftds2ibdjT1nwN1kkHTWSTPVKOCp37guCLWMGJuNPC30CYIm1TbuHb4qkWm7X6AkGbWu0hbHbYoBuY1BlhxmDADQHPJtYAObM80N2RQAIFMAFpYReMpEFovYa6czzKxW2RRc4uLTJn2nR3mta6BMCQ1ug4JgiUNrUD/et1LdbZhmloPE9x9vslOqFdr2hzCHNOhGh4KNZu9hwAAyAC0gZnWLZy8ftFK2ttShgqBqVXZWNsBq5x4NaPacf6skTki3bY2rSwtJ1as/KxvqTwa0cXHkuCb3b01to1hIIpgxSpC8dTzeeJ4aCy171by19o1w5wIaDFKkDIaPzceLvgE/2PssURmdBedTwH2W/qrKzsnVHcBmd3AaTH2zK4b28Zbsk4nQb/AOpXZewy7BpMdww1AH0pyqLggyDleAT7Lu6D5kCHe8BdB2pP7FkCcuHpujo0McfwBXJ8BtCnVjK7vfVNnenFVxgOIG8wu6iCWSVfsDSsHBjWAHUOEQJuAJEXnVUbfLft9RxwuBJvZ1ZvHmKZ4Dm/05qyYRo7AgiZm0cOt7+Sr218Gykc7abGMdGYtYGu9Rr+clbsczbAfMcM/PBHNcWnZieOXkq7srZTaAzHvVDx5dG/qrbsXYZfFWtIZwboXfp8So/sg0teHMa/N7bTlzS0BpY6DOUl0eV+ClMHtWrUyt7eg9zjAOjfa9kOu4xzgWiVy9L/AOddt6q32WUxxM95hpl3E5aYjaXBbdGzV6y5O0dwy8fYZd+SmsViw0QBAGgFhH6Ku1alTE1OxpaHxv4Ae1fl8dFnGUKrqRz1BJGY5WxbITlcCZBloBv7URcRL7KHYFrWkU2u7zgYk6GS4yYABETxVLa9BOoPaa0Z6ffUDdG/vXqad9RosJY0l2kjAcczMaDLepjD7MbRoGnTB0N75nOi7jF599rJjlOYZnBri6OEkzyaSRoPaA6JhvXWcajWh5yzcBxicp4ae5Mdl4htNtJr3ABr9T1JMddV6KQxsBVQDqji5xknE712Td1sYdg+9/EVJKL3arB+GpuGhBI/1FSijOa5ShCELCIQhCIhCEIiEl2iUku0RFABCSsrdSrKFhCwiyhYUTvLvBRwVE1qx6MYPE931Wj4nQLIE4BEveHbtHB0TWrOgCzWjxPdwawcT+A1NlwTeTb+I2hXzv6inTae6wchzPNx16CAEbe21iNoYjPUudGMHgpt5D83HX0Cldm4BtFvNx1d+Q6K0srI1CSTAGZ9h7rgvL1tBu8nIe51j1Wdk7NbREm7zqeX2W9E+Y1z3BrQSSYAGpKTSY6o4MY0kkwAOK6BsHYrcO3MYNQjvO4Do3p14qr/AFB+oKVpS6qjlGA/lxOob5uPlU2dlVv6pc44an2Gk7hkPW87LwQfgadB+jqDabvIsyleYNs4F1CtUpOuWPc2RocriD+IXqrY/wC4pfcb8F53+Vml2W0MS2Ldo2oPu1KbCf8ArLyoC0ubxXqKDgwxzgofZ+28RTbDKzwORIcPR0hO629NdwyvbTeNDLSP4SFW6VS6cFygDnDVd52HDEBTB3lMAGkRBzS2q5rs1gDJBuAI963YPeYMaGhtYRAkVhmyjMWtBNOwBcdOZVccFgBSC5qNyK0NJhzCsv8A4kaGBopVDEQTXIIhoaPC3SzbH6oS8ZvvUdEUmNMZdS62vIclWHFY5J19R+ZWrqbG5BSeM3ixFTVwb91v6yteymVK1dgJc4zqSTH6LTQpSrt8neFDsTRDLuNZrZIsAwdrUP8ApBHmVu1rnn6itHQ1uC7rsLB9jh6VLi1jQfOL/jKkEIUi4EIQhEQhCERCEIREJLtEpJdoiKvhCwhbqZZWFhQW9+9NLAUs7+9UdPZ0we888z9Vg4u+JgIBJgLGS271by0cDR7SqZcZFOmPE93IcgOLtB6BcG2xtXEbQxHaVDLjZrR4KbeTeQ5nikbQxuIx2INSo7M93uYxvBrR7LRy+JJU9gsG2i2BrxPElWtlZbcveYaMz8e6r729bREDFxyHufhI2fgW0W8yfE7n5dE6w1F9V4YxpJOg/M9EYTDPrPDGCSfQDiSeAXRdjbJZhmWu8+J3PoOQ6Km/UH6jZRZ1NEYaDfxdubOmbtccq6xsKl7UL3kxqfYcfIDzTsPYzMM2bGoR3nf7W8h8fg4xFafIJNevPQKMxeKEEkw0L5u/rK7zUqGXHXnyC95Z2jaYDGCAOfEldO2L+4pfcb8F52+V/GNqbTxeXRgp0z95rAXehMe5ehcBWFPCMedGUg4+QbJ+C8l7Rxjqrn1ah79V7qj/ALznF7vdJX0vJUIzTag5OmlNGOW5tY8lA5dTO9barrhYzJFR4t5JOZREBTAlbmHVJe9YpvCxUd0W7SAtHhxCkHPyjyaPWJXSvkdaBi6DT/6bEP8A8xfQ/wBriuT4qvJMK67j7Y7CvgK891rhSqH7FT6Jx8g7KfcuhjpEBQVAcedy9JoQhYXOhCEIiEIQiIQhCIhJdolJLtERV5YSlWd9d7qeBZAh9dw7lOdB9d/Jv4nQcSJACTAU0pW+W9lLAU5d36rh9HTm5+076rBz9wXDsViK+NruqVHZnu1PstbwAHBo4D+ZS39tjKzqlRxc9xlzjoBwAHADgAp7DYZtJuVo/Vx5lWtnaAjrHmGDM7+A4c5wqy9vhRGy3F27dxPsPZIwmFbSbA954kpzgcFUrvDGCT+DRzJ5Lbs3Z1TEPytHmeDRzK6Bs/AU8PTyt954uPX9FQfqL9RtpjqKI7m/+nezfvw4ujujql4/rHn6ZxOpO4e5yHkk7J2ZTw1OG3J8Tjq4/kOQWa9fidFjEVuJ0UVjcYAC5xgD+rcyvnwa+s8veZJzOq95a2oaA1owGAj0CVjMWAC5xho/r3lVjF419eoGtBgmABqTOp6/BIxFapiKga1pMmGtH9a9eCvu7+7zcMwuMGqWmTwaI8LfzPFei6P6OLjJ++75Ktq1al0fT2nYvPZHv3bz4DVWnaZP7KfHHDEerIXlTGaweE/l+i9dYbDirg20jo+jl9WQvLm82znU6z2OEOa4gg8CDBC9RvXihkoGIW6iAQZdEfFYczktT/JYhJWXvQHpBKxK1gLO2RqnVF10t+v9cx+qb0akFLruv7ljYELPWO3rXUN1YNg9+kaZ0Li33EAj0M+qgchcVYN36BDmtAkkgADVziQAB1JgKVqw04r1ZgqhdTY46lrSfMgEretdJmVobyAHoFsUajQhCERCEIREIQhEQsO0WVghEXNd9972YJmRkPxDh3W8GDg+p05DU+Ulcdaypiarqj3FznGXvdz/APywA0HRdyxnyVYCo9z3muXOMuJqkknmS4FbaXyZ4JoytNYAfbb/ANq77apbtP8AsmO7PzwC0rmrsf6onjp6rktGk2m3K0fqepT3ZWyX4h8NsB4nHQD8/JdLPyY4Q/3lf1p//WpzCbs0KTAxmYNHUeptcrn6X6Qua7Nm2AG4HADiYmTuGQ9am26LJq7Vw7DMxJJ8cI4nkVXB4SnQphjBbnxceZTfEV+JV0fu5SOpf6j/ALU3qboUHGS6p6t/7V4b/wCFeOcXvIJOZkk+i9hQuLamAMgOHkFz3HY0NGZ3uHE9Aq/FXE1AxrSZ0A0A4k/mup4j5PcM8y6rX6DNTgeXcT/Y+6eHw7SKeaTqXZc3QSGiw5BWdr0S5h+uPD2+VZDpe1o0yaYJfpIwHn6YnLBV7d/YDMM2bF8d5/8AtbyHxUpWHdPkVP8A7JZzd6j9Fh+yKZES71H6K/YGsGy0YLz1Wu6q8veZJWzYv/L0vuN+AXOvlY3EfiJxeFZmqgfS0xq8Cwezm8CxHEC1xB6XhaAYxrBMNAAnWBzW9ZmCoJxXjbEUy0lpBDgYINiCJBBB0PnyWhesN5NzsHjh/wCYoNc+IFRvcqjl323I6GR0XM9tfIa8ScJiwRwZXbB/+SmI/wChbSEXGXUpSOxV5x3yXbVpH/le0H1qdSm4HyBcHfgomrubtFuuAxPuovd8AURV7slsDRyU/h9yNpPs3AYj/NTcwer4CntmfJHtSr4qVOiOdWo38BSzn1hMEVKosXYfkf3UL3DGVWfRsM0pHiePaHRvPn5FSW6/yO0aTg/F1e2IuKbAW0/8xJzOH+nrK6hTphoDWgAAAAAQABYAAaBYJ0CzK2IQharVCEIREIQhEQhCERCEIREIQhEQhCERCEIREIQhEQhCERCEIREIQhEQhCERCEIREIQhEQhCERCEIREIQhEX/9k="},
    { id: 3, name: 'Injection', price: 29.99 ,imgadd:"data:image/jpeg;base64,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"},
  ]);
  const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  function handleUpdateQuantity(productId, quantity) {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function handleRemoveFromCart(productId) {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  }

  function getTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  return (
    <div className="App">
      <h1>Healthify Mart</h1>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <div className='box'>
                {product.name} 
                <img src={product.imgadd} alt="medicine" />
            </div>
            {product.name} - ₹{product.price}

            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>

          </li>
        ))}
      </ul>
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={e => handleUpdateQuantity(item.id, e.target.value)}
                />
              </td>
              <td>₹{item.price * item.quantity}</td>
              <td>
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total: ₹{getTotal()}</h3>
    </div>
  );
}

export default Product;