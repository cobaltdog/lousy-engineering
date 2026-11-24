# MA3700 - Formulae

> MA3700 · AIRCRAFT STRUCTURES 1 — exported from Lousy Engineering

---

## In-Service Loads

Relevant unit conversions:  
- $1\ pound\ (mass) =0.4536\ kg\ (mass)$
- $1\ ft^2=0.0929\ m^2$
- $1\ mile=1.609\ km$

Kinematic equations:  
- $v=v_0+at$
- $s=s_0+v_0t+\frac12at^2$
- $v^2={v_0}^2+2a(s-s_0)$

To convert a dynamic problem into a static problem, we define an   
inertia force $F_i=-ma$ due to the acceleration of the aircraft.  

### Lift, Drag, and Moment Coefficients

**Lift Coefficient**  
$L=\frac12\rho{V_\infin}^2 \cdot S\cdot C_L$  
*where *$\rho$* is air density at that altitude,   
and *$S$* is planform area of the wing*  

Lift curve provides information such as:  
- Maximum $C_{L_{max}}$ and its $\alpha_{max}$
- Minimum $C_{L_{min}}$ and its $\alpha_{min}$
- Lift slope $C_{L\alpha}$
Untitled  

**Drag Coefficient**  
$D=\frac12\rho{V_\infin}^2 \cdot S\cdot C_D$  
$AR=\frac{b^2}{S}=\frac{b}{c}$  

$C_D=C_{D_0} +\frac{{C_L}^2}{\pi eAR}$  
*where *$C_{D_0}$* is profile drag constant,   
*$e$* is span effectiveness factor and  
*$b$* is wing span*  

For maximum $\frac{L}{D}$, parasitic drag is equal   
to induced drag. Thus, $C_{D_0}=\frac{{C_L}^2}{\pi eAR}$.  
Untitled  

**Pitch Moment Coefficient**  
$M_{ac}=\frac12\rho{V_\infin}^2 \cdot S\cdot c\cdot C_M$  
*where *$c$* is average chord length of airfoil,   
and *$C_M$* is pitch moment coefficient*  
Untitled  

### Load Factor during Maneuvers

**Load Factor**  
$n=\frac{L}{W} =1+\frac{a_y}{g}$  
*Second form of equation can be determined from Newton’s   
second law, with a given acceleration in the *$y$*-direction.*  

$n=\frac12\rho_\infin{V_\infin}^2 \cdot\frac{C_L}{W/S}$  
*where *$\frac WS$* is the wing loading*  

Load factor as given by aviation authority:  
$n_1=2.1+\frac{24000} {2.20462W+10000}$  
*where *$W$* is in kilograms*  

Parameters in flight envelope:  
- Positive limit load is denoted by $n_1$
- Negative limit load is denoted by $n_3$
- Proof load is denoted by $n_p=1.25n_1$
- Ultimate load is denoted by $n_u=1.5n_1$
- Design dive speed is defined as $V_{dive}=1.2V_{cruise}$

**Banking Turn**  
$R=\frac{{V_\infin}^2} {g\sqrt{n^2-1}}$  
$\omega =\frac{g\sqrt{n^2-1}}{V_\infin}$  
$\phi=tan^{-1} \frac{{V_\infin}^2}{gR}$  
*where *$\phi$* is bank angle*  
**Pull-Up Maneuver**  
$R=\frac{{V_\infin}^2}{g(n-1)}$  
$\omega=\frac{g(n-1)}{V_\infin}$  
$n=\frac{{V_\infin}^2}{gR} +cos\theta$  
*where *$\theta$* is angle from lowest position of dive*  
**Pull-Down Maneuver**  
$ R=\frac{{V_\infin}^2}{g(n+1)}$  
$ \omega=\frac{g(n+1)}{V_\infin}$  

**Minimum Turn Radius and Maximum Turn Rate**  
When $n$ is very large, the formulas can be simplified to:  
$R =\frac{{V_\infin}^2}{gn} =\frac{{V_\infin}^2}{g(L/W)} =\frac{2}{\rho_\infin C_L\cdot g} \cdot\frac{W}{S}$  
$\omega =\frac{gn}{V_\infin} =\frac{g(L/W)}{V_\infin} =g\sqrt{\frac{\rho_\infin  C_L\cdot n}{2(W/S)}}$  

### Gust $V$-$n$ Diagram

Change in angle of attack due to gust:  
$\Delta\alpha ={tan^{-1}}\frac u{V_\infin} =\frac u{V_\infin}$  
*where *$u$* is gust velocity (positive for upwards, negative for downwards)*  

Change in lift due to gust:  
$\Delta L=\frac12\rho_\infin {V_\infin}^2SC_{L\alpha} \cdot\Delta\alpha$  
$\Delta L=\frac12\rho_\infin V_\infin SC_{L\alpha}u$  

Change in load factor due to gust:  
$\Delta n=\frac{\Delta L}{W} =\frac12\frac{\rho_\infin V_\infin SC_{L\alpha}u}{W}$  

Total load factor accounted for gust load:  
$n_G=1+\Delta n =1+\frac12\frac{\rho_\infin V_\infin SC_{L\alpha}u}{W}$  

Maxmimum speed in the presence of a gust:  
$n_1=n_G$  
$n_1=1+\frac12\frac{\rho_\infin  V_P SC_{L\alpha}u}{W}$  
$V_P=\frac{2W(n_1-1)} {\rho_\infin C_{L\alpha}u}$  
*where *$V_P$* is penetration speed*  

## Torsion of Thin-Walled Structures

$\frac{\tau}{r}=\frac{T}{J}=G\phi$  
$J_{solid} =\frac{\pi r^4}{2} =\frac{\pi d^4}{32}$  
$J_{hollow} =\frac\pi2({r_o}^4-{r_i}^4)$  
$J_{thin}=2\pi{r_0}^3t$  
$I_{thin}=\pi{r_0}^3t$  

### Closed Section

Shear stress for a thin-walled section:  
$\tau=\frac qt=\frac{T}{2A_0t}$  
*where *$A_0$* represents the mean area*  

Torque for a thin-walled section:  
$T_{single-cell}=2A_0q$  
$T_{multi-cell} =2\sum A_iq_i$  

Angle of twist for a thin-walled section:  
$\phi_{single-cell} =\frac{T}{4{A_0}^2G} \oint \frac{ds}{t} =\frac{1}{2A_0G} \oint\frac{q}{t}\ ds$  
$\phi_{multi-cell} =\frac{T}{4{A_i}^2G} \Big(\oint\frac{ds}t\Big)_i =\frac1{2A_iG} \Big(\oint\frac{q}{t}\ ds\Big)_i$  
*Note that *$\phi$* is expressed in *$rad/m$*.*  

Alternative expression for polar moment of inertia:  
$J=\frac{T}{G\phi} =\frac{4{A_0}^2} {\oint\frac{ds}{t}}$  

### Open Section

Polar moment of ineratia:  
$J_R=\frac13\sum b_i{t_i}^3$  

Shear stress for a thin-walled section:  
$\tau=2Gh\phi=Gt\phi$  
*where *$t$* is the thickness of the section when unfolded*  

Maximum shear stress:  
$\tau_{max}=\pm\frac{Tt}{J_R}$  

Torque for a thin-walled section:  
$T=G\phi J_R$  

Angle of twist for a thin-walled section:  
$ \phi=\frac{T}{GJ_R}$  

### Hybrid Section

Combined polar moment of inertia:  
$J_{C}=\frac{4{A_0}^2} {\oint\frac{ds}{t}} +\frac13\sum b_i{t_i}^3$  

Angle of twist for closed section:  
$\phi=\frac{T}{GJ}=\frac{2A_0q}{GJ}$  

Maximum shear stress for open section:  
$\tau_{max}=\pm\frac{GTt}{GJ}$  

## Analysis of Thin-Walled Structures

### Bending in Beams

**Unsymmetrical Bending Theory**  
General equation for bending stress:  
$\sigma_z =\frac{M_x(I_{yy}y-I_{xy}x)} {I_{xx}I_{yy}-{I_{xy}}^2} +\frac{M_y(I_{xx}x-I_{xy}y)} {I_{xx}I_{yy}-{I_{xy}}^2}$  

If beam section has an axis of symmetry:  
$\sigma_z =\frac{M_x}{I_{xx}}y +\frac{M_y}{I_{yy}}x$  

Inclination of neutral axis:  
$tan\alpha =-\frac{M_yI_{xx}-M_xI_{xy}} {M_xI_{yy}-M_yI_{xy}}$  

---

### Shearing in Beams

General equation for shear flow:  
$q_s-q_0 =-\Big( \frac{S_yI_{yy}-S_xI_{xy}} {I_{xx}I_{yy}-{I_{xy}}^2}\Big) \int_0^syt\ ds -\Big( \frac{S_{x}I_{xx}-S_yI_{xy}} {I_{xx}I_{yy}-{I_{xy}}^2}\Big) \int_0^sxt\ ds$  

If beam section has an axis of symmetry:  
$q_s-q_0 =-\frac{S_y}{I_{xx}} \int_0^syt\ ds -\frac{S_x}{I_{yy}} \int_0^sxt\ ds$  

*Note that *$q_0=0$* for an open section beam (open edge of the cross section)   
and *$q_0$* is an unknown and must be computed for a closed section beam.*  

**Shear Center of Closed Section**  
$q_s=q_b+q_0$  

If shear forces act through shear center:  
$q_0 =-\frac{\oint (q_b/t)\ ds} {\oint ds/t}$  
*where *$q_b$* represents the basic shear flow (shear flow assuming an open section)*  

If shear forces do not act through shear center:  
$S_xy-S_yx =\oint rq_s\ ds$  
$S_xy-S_yx =\oint r(q_b+q_0)\ ds$  
$S_xy-S_yx =\oint rq_b\ ds +2A_0q_0$  
$q_0=\frac{S_xy-S_yx -\oint rq_b\ ds}{2A_0}$  
*When shear forces do not act through the shear center, it results in a torque about the   
shear center. Thus, the problem can be broken down into shear flow due to the vertical   
shear force and shear flow due to torsion. Hence, the second term *$2A_0q_0$*.*  

## Analysis of Fuselage Structures

### Thin-Walled Pressure Vessels

**Cylindrical Vessel**  
$\sigma_1=\frac{pr}{t}$ *(hoop stress)*  
$\sigma_2=\frac{\sigma_1}2 =\frac{pr}{2t}$ *(longitudinal stress)*  

$\varepsilon_1=\frac{\Delta r}{r} =\frac1E(\sigma_1-v\sigma_2)$  
$\varepsilon_2=\frac{\Delta L}{L} =\frac1E(\sigma_2-v\sigma_1)$  
$\varepsilon_3=\frac{\Delta t}{t} =-\frac vE(\sigma_1+\sigma_2)$  
**Spherical Vessel**  
$\sigma_1=\sigma_2=\frac{pr}{2t}$  

---

### Bending with Internal Pressure

$\sigma_z=\frac{pr}{2t}\pm \frac{M}{\pi r^2t}$ *(longitudinal stress and bending stress)*  
$\sigma_y=\frac{pr}{t}$ *(hoop stress)*  

---

### Twisting with Internal Pressure

$\tau_{zy}=\frac{T}{2A_0t}$ *(shear flow due to torque in a single-cell closed section)*  
$\sigma_z=\frac{pr}{2t}$ *(longitudinal stress)*  
$\sigma_y=\frac{pr}{t}$ *(hoop stress)*  

---

### Combined Loading with Internal Pressure

$\sigma_z=\frac{pr}{2t} \pm\frac{M_x}{\pi r^2t} \pm\frac{M_y}{\pi r^2t}$ *(longitudinal stress and bending stresses)*  
$\tau_{zy} =\frac{T}{2A_0t} +\frac{q_s}{t}$ *(shear flow due to torque and shear flow due to shear forces)*  
*Note that *$q_s$* is the shear flow for a closed section, whereby *$q_s=q_b+q_0$*.*  

## Practical Aircraft Stress Analysis

### Structural Idealization

To idealize a structure into an arrangement of booms and skin, the   
cross-sectional area of each boom needs to be determined first.  
$A_m=\frac{bt}{6}\Big(2 +\frac{\sigma_n}{\sigma_m}\Big)$  
*where *$b$* is the length of the skin between booms *$m$* and *$n$*,  
and *$t$* is the thickness of that skin*  

*For a skin between booms *$m$* and *$n$*, the cross-sectional area of boom *$m$* is given by   
the above equation. If a stiffener is present at the joint between two skins, the cross-  
sectional area of the stiffener needs to be added.*  

Sectional properties of an idealized structure:  
$I_{xx}=\sum B_r{y_r}^2$  
$I_{yy}=\sum B_r{x_r}^2$  
$I_{xy}=\sum B_rx_ry_r$  

General equation for bending stress:  
$\sigma_z =\frac{M_x(I_{yy}y_r-I_{xy}x_r)} {I_{xx}I_{yy}-{I_{xy}}^2} +\frac{M_y(I_{xx}x_r-I_{xy}y_r)} {I_{xx}I_{yy}-{I_{xy}}^2}$  
*where subscript *$r$* represents the boom*  

General equation for shear flow:  
$q_s-q_0 =-\Big(\frac{S_yI_{yy}-S_xI_{xy}} {I_{xx}I_{yy}-{I_{xy}}^2}\Big)\  \sum\limits^n\limits_{r=1}B_ry_r -\Big(\frac{S_xI_{xx}-S_yI_{xy}} {I_{xx}I_{yy}-{I_{xy}}^2}\Big)\  \sum\limits^n\limits_{r=1}B_rx_r$  
*where subscript *$r$* represents the boom*  

---

### Torsion of Multicell Wing Section

Angle of twist for a wing section in pure torque:  
$\phi=\frac1{2A_RG}\Big[ -q_{R-1}\delta_{R-1,R} +q_R\delta_R -q_{R+1}\delta_{R+1,R}\Big]$  
*where *$\delta=\int\frac{ds}{t}$  

If wing section has different shear modulus:  
$\phi=\frac1{2A_RG_{ref}}\Big[ -q_{R-1}\delta_{R-1,R} +q_R\delta_R -q_{R+1}\delta_{R+1,R}\Big]$  
*where *$\delta=\int\frac{ds}{t^*}$* and *$t^*=\frac{Gt}{G_{ref}}$  

*Note that *$\delta_{R-1,R}$* and *$\delta_{R+1,R}$* refers to the partition walls between the cells.  
For a section with different shear modulus, *$G_{ref}$* is a convenient reference   
value of the shear modulus.*  

---

### Shear of Multicell Wing Section

Angle of twist for a wing section subjected to transverse stress:  
$\phi=\frac1{2A_RG}\Big[ -q_{0,R-1}\delta_{R-1,R} +q_{0,R}\delta_R -q_{0,R+1}\delta_{R+1,R} +\oint_R\frac{q_b}{t}\ ds\Big]$  
*where *$\delta=\int\frac{ds}{t}$  

If wing section has different shear modulus:  
$\phi=\frac1{2A_RG_{ref}}\Big[ -q_{0,R-1}\delta_{R-1,R} +q_{0,R}\delta_R -q_{0,R+1}\delta_{R+1,R} +\oint_R\frac{q_b}{t^*}\ ds\Big]$  
*where *$\delta=\int\frac{ds}{t^*}$* and *$t^*=\frac{Gt}{G_{ref}}$  

Moments equation of shear flow in wing section:  
$S_xy-S_yx =\sum\limits^N\limits_{R=1} \Big(\oint rq_b\ ds\Big) +\sum\limits^N\limits_{R=1} \Big(2A_0q_{0,R}\Big)$  
*The above equation accounts for the combined effects of shear forces and   
torsion due to shear forces not acting through the shear center of the section.*  

Moments equation of shear flow for a tapered wing section:  
$S_xy-S_yx =\sum\limits^N\limits_{R=1} \Big(\oint rq_b\ ds\Big) +\sum\limits^N\limits_{R=1} \Big(2A_0q_{0,R}\Big) -\sum\limits^n\limits_{r=1} P_{x,r}y_r +\sum\limits^n\limits_{r=1} P_{y,r}x_r$  
*For a tapered wing section, normal stresses in a boom can be resolved   
into *$x$*-, *$y$*- and *$z$*-components, which may contribute to shear forces.*  

## Deflection of Beams

### Symmetrical Section

Deflection (moment-curvature) equation:  
$EI\ \frac{d^2v}{dz^2}=M$  
*Integrating once gives the equation for the slope *$\theta$*.  
Integrating twice gives the equation for the deflection *$v$*.*  

Higher-order deflection equation:  
$EI\  \frac{\partial^4v}{\partial z^4} =\frac{\partial S_y}{\partial z} =p$  
*where *$p$* is the applied transverse load*  

*Integrating once gives the equation for shear force *$S_y$*.  
Integrating twice gives the equation for moment *$M_x$*.*  

---

### Arbitrary Section

Horizontal deflection equation:  
$\frac{d^2u}{dz^2} =-\frac{M_yI_{xx}-M_xI_{xy}} {E(I_{xx}I_{yy}-{I_{xy}}^2)}$  

Vertical deflection equation:  
$\frac{d^2v}{dz^2} =-\frac{M_xI_{yy}-M_yI_{xy}} {E(I_{xx}I_{yy}-{I_{xy}}^2)}$  

---

### Unit Load Method

Unit load equation for a beam subjected to bending:  
$\Delta_M=\int^L_0 \Big\langle \frac{Mm}{EI} \Big\rangle\ dz$  
*where *$M$* is the actual moment, and *$m$* is the virtual moment*  

Unit load equation for a beam subjected to transverse shear forces:  
$\Delta_Q=\int^L_0 \Big(\int\frac{Q_sq_s}{Gt} \ ds\Big)dz$  
*where *$Q_s$* is the actual shear flow, and *$q_s$* is the virtual shear flow*  

For a beam subjected to both bending and transverse shear:  
$\Delta_{comb} =\int^L_0\Big\langle \frac{Mm}{EI}\Big\rangle\ dz +\int^L_0\Big(\int \frac{Q_sq_s}{Gt}\ ds\Big)dz$  
*Actual shear flow *$Q_s$* needs to be determined first using theories in previous chapters.*  

## Buckling of Columns

### Euler Buckling Load

A Euler column is a perfect column; ideally straight.  

Critical buckling load of a column:  
$P_{cr} =\frac{m^2\pi^2}{L^2}EI =m^2\cdot P_{Euler}$  
*where *$m$* is the mode of the column (number of constraints)*  

For columns with different end conditions:  
$P_{cr} =K\frac{m^2\pi^2}{L^2}EI =Km^2\cdot P_{Euler}$  
*where *$K=4$* for a beam fixed at both ends (C-C),  
and *$K=1$* for a beam simply supported at both ends (S-S),  
and *$K=0.25$* for a beam fixed at one end and free at the other (C-F),  
and *$K=2.05$* for a beam fixed at one end and simply supported at the other (C-S)*  

---

### Effect of Imperfections

Initial imperfection (deflection) of column:  
$v_0=a_0sin\frac{\pi z}{L}$  
*where *$a_0$* is a constant*  

Ratio of Euler buckling load with actual buckling load:  
$\frac1\alpha =\frac{P_{Euler}}{P}$  

Deflection of an imperfect column due to applied compressive load:  
$v=\frac{\alpha}{1-\alpha}a_0 sin\frac{\pi z}{L}$  

Total deflection of an imperfect column:  
$v_{tot}=v_0+v$  
$v_{tot}=\frac1{1-\alpha} a_0sin\frac{\pi z}{L}$  

---

### Beam Columns

Beam columns are structural members that support both axial and transverse loads.  

Deflection at any point of beam column:  
$v=\frac{W}{2P\lambda}\Big[\frac {sin\lambda z}{cos(\lambda L/2)} -\lambda z\Big]$  
*where *$\lambda^2=\frac{P}{EI}$  

Deflection at midpoint of beam column:  
$\delta =\frac Wk\cdot\frac{1}{1-\alpha}$  
*where *$W$* is the concentrated transverse load and stiffness *$k=\frac{48EI}{L^3}$  

---

### Energy Approach to Buckling

Elastic strain energy equation for a column:  
$U=\frac12\int EI\Big( \frac{\partial^2v}{\partial z^2} \Big)^2\ {dz}$  

Work done by compressive load on column:  
$W_e=\frac12\int P_{cr}\Big( \frac{\partial v}{\partial z} \Big)^2\ {dz}$  

Total potential energy in a buckled system:  
$\Pi=\frac12\int EI\Big( \frac{\partial^2v}{\partial z^2} \Big)^2\ {dz} -\frac12\int P_{cr}\Big( \frac{\partial v}{\partial z} \Big)^2\ {dz}$  
*where *$\Pi$* is a constant*  
