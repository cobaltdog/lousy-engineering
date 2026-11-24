# MA3006 - Formulae

> MA3006 · FLUID MECHANICS — exported from Lousy Engineering

---

## Fundamental Concepts

### Density

Specific volume → $v=\frac1{\rho}$  
Specific weight → $\gamma=\rho g$  
Specific gravity → $SG=\frac{\rho}{\rho_{water}}$  

---

### Viscosity

**Rate of Shearing Strain**  
$\dot\gamma=\frac Ub=\frac{du}{dy}$  

**Absolute Viscosity**  
$\tau=\mu\frac{du}{dy}$  

**Kinematic Viscosity**  
$\nu=\frac{\mu}{\rho}$  

## Fluid Statics (Hydrostatics)

### Hydrostatic Force on a Surface

**Hydrostatic Force on a Plane Surface**  
Resultant force → $F_R=\gamma h_cA$  

Location of resultant force:  
$y_R=\frac{I_{x_c}}{y_cA}+y_c$  
$x_R=\frac{I_{xy_c}}{y_cA}+x_c$  

**Hydrostatic Force on a Curved Surface**  
$F_{hori}=\gamma h_cA_{proj}$  
$F_{vert}=\gamma\sout V$  
$F_R =\sqrt{{F_{hori}}^2+{F_{vert}}^2}$  

---

### Pressure Variation in a Fluid

Newton’s second law:  
$-\nabla p -\gamma\bold k =\rho a$  

**Pressure Gradient of a Stationary Fluid**  
$\frac{dp}{dz}=-\gamma$  

**Pressure Gradient in Rigid-Body Motion**  
$dp= \frac{\partial p}{\partial x}dx+ \frac{\partial p}{\partial y}dy+ \frac{\partial p}{\partial z}dz$  
$\frac{\partial p}{\partial x}=-\rho a_x$  
$\frac{\partial p}{\partial y}=-\rho a_y$  
$\frac{\partial p}{\partial z}=-\rho(g+a_z)$  

**Pressure Gradient in Rigid-Body Rotation**  
$dp= \frac{\partial p}{\partial r}dr+ \frac{\partial p}{\partial\theta}d\theta+ \frac{\partial p}{\partial z}dz$  
$\frac{\partial p}{\partial r}=\rho r\omega^2$  
$\frac{\partial p}{\partial\theta}=0$  
$\frac{\partial p}{\partial z}=-\rho(g+a_z)$  

Height of fluid’s free surface along a constant pressure line  
$\frac{dz}{dr} =\frac{r\omega^2}{g+a_z}$  
$z=\frac{r^2\omega^2}{2(g+a_z)}+constant$  
*As *$r$* increases, the height of the fluid increases.*  

Surfaces of constant pressure  
$ \int dp=\int \rho r\omega^2\ dr-\int \rho(g+a_z)\ dz$  
$p=\frac{\rho r^2\omega^2}{2} -\rho(g+a_z)z+constant$  
*As *$r$* increases, the pressure of the fluid increases.  
As *$z$* increases, the pressure of the fluid decreases.  
Thus, pressure varies radially, as well as hydrostatically in the vertical direction.*  

## The Bernoulli Equation

### Newton’s Second Law

$F=ma$** Along a Streamline**  
$-\gamma sin\theta-\frac{\partial p}{\partial s}=\rho a_s$  
$p+\frac12\rho V^2+\rho gz=constant$  
$\frac{p}{\rho g}+\frac{V^2}{2g}+z=constant$  

$F=ma$** Normal to a Streamline**  
$-\gamma cos\theta-\frac{\partial p}{\partial n}=\rho\ \frac{V^2}{R}$  
$p+\rho\int\frac{V^2}R\ dn+\rho gz=constant$  

---

### Applications of the Bernoulli Equation

**Continuity Equation — Conservation of Mass**  
$Q=A_1V_1=A_2V_2$  

**Flowrate Measurement**  
$V_2=\sqrt{\frac{2(p_1-p_2)}{\rho\Big[1-\big(\frac{A_2}{A_1}\big)^2\Big]}}$  
$Q=A_2\sqrt{\frac{2(p_1-p_2)}{\rho\Big[1-\big(\frac{A_2}{A_1}\big)^2\Big]}}$  

## Fluid Kinematics

### Velocity Field

$\bold V =u(x,y,z,t)\bold i +v(x,y,z,t)\bold j +w(x,y,z,t)\bold k$  
**Streamline Equations**  
$\frac{dy}{dx}=\frac vu$  
$\frac{dz}{dx}=\frac wu$  
$\frac{dz}{dy}=\frac wv$  
**Pathline Equations**  
$u=\frac{dx}{dt}$  
$v=\frac{dy}{dt}$  
$w=\frac{dz}{dt}$  

---

### Reynolds Transport Theorem

$B=mb=\rho\sout Vb$  
$\frac{dB_{sys}}{dt} =\frac{d\big(\int_{sys}\  \rho b\ d\sout V\big)}{dt}$  
$\frac{dB_{CV}}{dt} =\frac{d\big(\int_{CV}\  \rho b\ d\sout V\big)}{dt}$  

**Simplified Version**  
$\frac{dB_{sys}}{dt} =\frac{\partial B_{CV}}{\partial t}-\rho_1A_1V_1b_1+\rho_2A_2V_2b_2$  

**General Version**  
$\frac{dB_{sys}}{dt} =\frac{\partial}{\partial t} \int_{CV}\ \rho b\ d\sout V +\int_{CS}\  \rho b(\bold V\cdot\bold n)\ dA$  

## Control Volume Analysis

### Conservation of Mass

**Fixed Control Volume**  
Reynolds transport theorem:  
$0 =\frac{\partial}{\partial t} \int_{CV}\ \rho\ d\sout V +\int_{CS}\  \rho(\bold V\cdot\bold n)\ dA$  

Continuity equation:  
$\sum\dot m_{in}=\sum\dot m_{out}$  
$\sum Q_{in}=\sum Q_{out}$  

**Moving Control Volume**  
Reynolds transport theorem:  
$0 =\frac{\partial}{\partial t} \int_{CV}\ \rho\ d\sout V +\int_{CS}\ \rho Wcos\theta\ dA$  

Relation between absolute and relative velocity:  
$V_{abs}=W+V_{CV}$  

---

### Momentum Equation

**Linear Momentum**  
Reynolds transport theorem,  
$\sum\bold F =\frac{\partial}{\partial t} \int_{CV}\  \bold V\rho\ d\sout V +\int_{CS}\  \bold V\rho (\bold V\cdot\bold n)\ dA$  

Simplified equation:  
$\sum\bold F =\sum(\dot m\bold V)_{out} -\sum(\dot m\bold V)_{in}$  
*Assuming steady flow and uniform velocity across inlets and outlets.*  

**Angular Momentum**  
Reynolds transport theorem:  
$\sum\bold T =\frac{\partial}{\partial t} \int_{CV}\  (\bold r\times\bold V)\rho \ d\sout V +\int_{CS}\  (\bold r\times\bold V)\rho (\bold V\cdot\bold n)\ dA$  

Simplified equation:  
$\sum\bold T =\sum\big[\dot m (\bold r\times\bold V)\big]_{out} -\sum\big[\dot m (\bold r\times\bold V)\big]_{in}$  
*Assuming steady flow and uniform velocity across inlets and outlets.*  

---

### Energy Equation

Energy equation in terms of watts:  
$\dot W_{in} +\sum\bigg[\dot m \Big(\frac{P}{\rho} +\frac12V^2+gz\Big)\bigg]_{in} =\dot W_{out} +\sum\bigg[\dot m \Big(\frac{P}{\rho} +\frac12V^2+gz\Big)\bigg]_{out}$  

Energy equation in terms of height:  
$h_{in} +\Big(\frac{P}{\rho g} +\frac{V^2}{2g}+z\Big)_{in} =h_{out} +\Big(\frac{P}{\rho g} +\frac{V^2}{2g}+z\Big)_{out}$  

Power input to a pump:  
$\dot W_{pump} =\dot mgh_{pump} =\rho Qgh_{pump}$  
*where *$Q$* is volume flow rate*  

## Dimensional Analysis

### Buckingham Pi Theorem

Step 1:   List the variables involved in the problem — $n$ variables.  
Step 2:   Express each variable in terms of basic dimensions — $m$ reference dimensions.  
Step 3:   Determine the required number of $\Pi$-groups given by $k=n-m$.  
Step 4:   Select $m$ number of repeating variables.  
Step 5:   Construct the $\Pi$-groups.  
Step 6:   Compare coefficients and solve for the exponents.  

---

### Modeling and Similitude

**Dimensionless Numbers**  

| Reynolds number *(most fluid problems)* | $Re=\frac{Inertia\ Force} {Viscous\ Force} =\frac{\rho VL}{\mu} =\frac{VL}{\nu}$ |
| --- | --- |
| Froude number *(free surface flows)* | $Fr=\frac{Inertia\ Force} {Gravitational\ Force} =\frac{V}{\sqrt{gL}}$ |
| Euler number *(flows with pressure differentials)* | $Eu=\frac{Pressure\ Force} {Inertia\ Force} =\frac{p}{\rho V^2}$ |
| Strouhal number *(compressible flows)* | $St=\frac{Local\ Inertia\ Force} {Convective\ Inertia\ Force} =\frac{fL}{V}$ |
| Weber number *(flows with surface tension)* | $We=\frac{Inertia\ Force} {Surface\ Tension\ Force} =\frac{\rho V^2L}{\sigma}$ |

To achieve dynamic similitude, Reynolds number of the model and prototype must be   
the same. Then, force coefficients (e.g. drag force coefficient), will be the same as well.  

## Viscous Flow in Pipes

### Fully Developed Laminar Flow

Shear stress:  
$\tau =\mu\frac{du}{dy} =-\frac{(\Delta P +\rho g\Delta z)r}{2l}$  

Velocity profile:  
$V(r) =\frac{(\Delta P +\rho g\Delta z)D^2}{16\mu l} \Big[1-\big( \frac{2r}{D} \big)^2\Big]$  
Volume flow rate:  
$Q=\frac{(\Delta P +\rho g\Delta z)\pi D^4} {128\mu l}$  

Centerline velocity:  
$V_{center}=\frac{(\Delta P +\rho g\Delta z)D^2}{16\mu l}$  
Average velocity:  
$V_{avg} =\frac QA =\frac{(\Delta P +\rho g\Delta z)D^2}{32\mu l}$  

---

### Major Head Loss in Pipes

Pressure drop:  
$\Delta P=f\cdot\frac{l}{D}\cdot \frac{\rho V^2}{2}$  
$h_{L,major} =f\cdot\frac{l}{D}\cdot \frac{V^2}{2g}$  
*Note that the equation is only valid for horizontal pipes.*  

Friction factor:  
$f_{\ laminar}=\frac{64}{Re}$  
$f_{\ turbulent} =\frac{0.316}{Re^{1/4}}$  
*Note that friction factor for turbulent flow is valid   
only if *$Re<10^5$* and relative roughness *$\frac{\varepsilon}{D}=0$*.*  

---

### Minor Head Loss in Pipes

Minor loss:  
$h_{L,minor} =K_L\cdot\frac{V^2}{2g}$  
*Note that *$V$* corresponds to fluid velocity in the smaller diameter pipe.*  

**Entrance and Exit Losses**  
Reentrant entrance:  
Sharp-edged entrance:  
Rounded entrance:  
Any type of exit:  
$K_L=0.8$  
$K_L=0.5$  
$K_L<0.5$  
$K_L=1$  

**Expansion and Contraction Losses**  
Loss factor due to change in diameter:  
$K_L=\Big(1-\frac{A_1}{A_2}\Big)^2$  
*where *$A_1$* is upstream cross-section area and *$A_2$* is downstream cross-section area*  

---

### Flow Rate Measurement

Ideal flow rate:  
$Q_{ideal}=A_2 \sqrt{\frac{2(P_1-P_2) +2\rho g(z_1-z_2)} {\rho(1-\beta^4)}}$  
*where *$\beta=\frac{d}{D}$  

Flow rate for different meters:  
$Q_{orifice,actual} =C_oQ_{ideal}$  
$Q_{nozzle,actual} =C_nQ_{ideal}$  
$Q_{venturi,actual}=C_vQ_{ideal}$  

## Turbomachines

Overall efficiency of a pump:  
$\eta_{pump} =\frac{P_{fluid}}{P_{shaft}} =\frac{\rho Qgh_p}{P_{shaft}}$  

---

### Similarity Laws

Flow coefficient:  
$C_Q=\frac{Q}{\omega D^3}$  
Head rise coefficient:  
$C_H =\frac{gh_p}{\omega^2D^2}$  
Power coefficient:  
$C_P =\frac{P_{shaft}}{\rho\omega^3D^5}$  

For small pumps, the effects of viscosity and surface roughness becomes significant.   
Thus, as pump size decreases, these factors significantly influence pump efficiency.  
$\frac{1-\eta_2}{1-\eta_1} =\Big(\frac{D_1}{D_2}\Big)^{1/5}$  

Specific speed of a pump:  
$N_s=\frac{\omega\sqrt Q} {(gh_p)^{3/4}} =\frac{{C_Q}^{1/2}} {{C_H}^{3/4}}$  

---

### Pump and System Match

System demand curve:  
$E=z_2-z_1 +\frac{Q^2}{2gA^2} \Big(\frac{fl}{D}+\sum K_L\Big)$  

**Pumps in Series**  
Total head produced by series pumps:  
$H_{tot}=H_1+H_2+\dots+H_n$  

Flow rate through series pumps:  
$Q=Q_1=Q_2=Q_n$  
**Pumps in Parallel**  
Total head produced by parallel pumps:  
$H=H_1=H_2=H_n$  

Flow rate through parallel pumps:  
$Q_{tot}=Q_1+Q_2+\dots+Q_n$  

**Net Positive Suction Head**  
Net positive suction head available:  
$NPSH_A =\frac{P_s-P_v}{\rho g} +\frac{{V_s}^2}{2g}$  
*where *$P_s$* is pressure at pump suction side, and *$P_v$* is vapor pressure  
Note that the pressures used in the equation are absolute pressure.*  

Alternative expression for $NPSH_A$:  
$\frac{P_{atm}}{\rho g} +\frac{{V_1}^2}{2g}+z_1 =\frac{P_s}{\rho g} +\frac{{V_s}^2}{2g}+z_s+h_L$  
$\frac{P_{atm}}{\rho g}+0+z_1 =\frac{P_s}{\rho g} +\frac{{V_s}^2}{2g}+z_s+h_L$  
$\frac{P_{atm}}{\rho g} -\frac{P_v}{\rho g}+z_1 =\frac{P_s}{\rho g} -\frac{P_v}{\rho g} +\frac{{V_s}^2}{2g} +z_s+h_L$  
$\frac{P_{atm}}{\rho g} -\frac{P_v}{\rho g}+z_1 =NPSH_A +z_s+h_L$  
$NPSH_A =\frac{P_{atm}-P_v}{\rho g} +(z_1-z_s)-h_L$  

For cavitation to not occur:  
$NPSH_A\ge NPSH_R$  
*Required NPSH is a characteristic of the pump and its operating conditions.*  
