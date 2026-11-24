# MA3003 - Formulae

> MA3003 · HEAT TRANSFER — exported from Lousy Engineering

---

## Heat Transfer Mechanism

Energy balance for a control volume:  
$\frac{dE_{sys}}{dt} =\dot E_{in}-\dot E_{out} +\dot E_{gen}$  
$\dot E_{st} =\dot Q_{in}-\dot Q_{out} +\dot E_{gen}$  
$\dot E_{st} =\dot Q_{in}-\dot Q_{out} +\dot e_{gen}V$  
*where *$V$* is volume of a medium*  

Energy balance for a control surface:  
$\dot E_{in}=\dot E_{out}$  
$\dot Q_{in}=\dot Q_{out}$  
*Since *$V=0$* for a control surface, *$\dot E_{st}=\dot E_{gen}=0$*.*  

---

### Fourier’s Law of Conduction

Total heat transfer via conduction:  
$\dot Q_{cond} =-kA\frac{dT}{dx}$  
*where *$k$* is thermal conductivity of a material *$(W/m\cdot K)$*,  
and *$A$* is area normal to the direction of heat transfer*  

Total heat flux:  
$\dot q_{cond} =-k\frac{dT}{dx}$  

---

### Newton’s Law of Cooling

Total heat transfer via convection:  
$\dot Q_{conv} =hA_s(T_s-T_\infin)$  
*where *$h$* is convection heat transfer coefficient *$(W/m^2\cdot K)$*,  
and *$A_s$* is the surface area in contact with the fluid*  

Total heat flux:  
$\dot q_{conv} =h(T_s-T_\infin)$  
*Note that the temperature difference follows the direction of heat transfer.  
If *$T_s>T_\infin$*, the surface is losing heat to the environment, thus *$T_s-T_\infin$*.  
If *$T_s<T_\infin$*, the surface is gaining heat from environment, thus *$T_\infin-T_s$*.*  

---

### Radiation Heat Transfer

Maximum rate of radiation emitted by a blackbody:  
$\dot Q_{emit,max} =\sigma A_s{T_s}^4$  
*where Boltzmann’s constant *$\sigma=5.67\times10^{-8} \ W/m^2\cdot K^4$  

Rate of radiation emitted by a real surface:  
$\dot Q_{emit} =\varepsilon\sigma A_s{T_s}^4$  
*where *$\varepsilon$* is emissivity of a surface, ranging from *$0\le\varepsilon\le1$*, with *$\varepsilon=1$* for a blackbody*  

Incident radiation absorbed by a real surface:  
$\dot Q_{absorb} =\alpha\dot Q_{incident} =\alpha\sigma A_s{T_{surr}}^4$  
*where absorptivity *$\alpha$* ranges from *$0\le\alpha\le1$*, with *$\alpha=1$* for a blackbody*  

Net radiation heat transfer:  
$\dot Q_{rad} =\dot Q_{emit} -\dot Q_{absorb}$  
$\dot Q_{rad} =\varepsilon\sigma A_s{T_s}^4 -\alpha\sigma A_s{T_{surr}}^4$  
$\dot Q_{rad} =\varepsilon\sigma A_s ({T_s}^4-{T_{surr}}^4)$  
*Surrounding surfaces are treated as blackbodies.  
Surface of interest is treated as a gray surface, such that *$\varepsilon=\alpha$*.*  

Linearized radiation heat transfer coefficient:  
$h_{rad} =\varepsilon\sigma ({T_s}^2+{T_{surr}}^2) (T_s+T_{surr})$  
$h_{rad} =\varepsilon\sigma 4{T_m}^4$  
*where mean temperature *$T_m=\frac{T_s+T_{surr}}{2}$  

## Heat Conduction Equation

Conduction equation in rectangular coordinates:  
$\rho c \frac{\partial T}{\partial t} =\frac{\partial}{\partial x} \Big(k\frac{\partial T} {\partial x}\Big) +\frac{\partial}{\partial y} \Big(k\frac{\partial T} {\partial y}\Big) +\frac{\partial}{\partial z} \Big(k\frac{\partial T} {\partial z}\Big) +\dot e_{gen}$  
*where *$\dot e_{gen}$* is heat generation per unit volume *$(W/m^3)$  

If thermal conductivity $k$ is a constant:  
$\frac{1}{\alpha} \frac{\partial T}{\partial t} =\frac{\partial^2T}{\partial x^2} +\frac{\partial^2T}{\partial y^2} +\frac{\partial^2T}{\partial z^2} +\frac{\dot e_{gen}}{k}$  
*where *$\alpha=\frac{k}{\rho c}$* is thermal diffusivity of a material *$(m^2/s)$  

Conduction equation in cylindrical coordinates:  
$\rho c \frac{\partial T}{\partial t} =\frac1r \frac{\partial}{\partial r} \Big( kr\frac{\partial T}{\partial r} \Big) +\frac1{r^2} \frac{\partial}{\partial\phi} \Big( k\frac{\partial T}{\partial\phi} \Big) +\frac{\partial}{\partial z} \Big( k\frac{\partial T}{\partial z} \Big) +\dot e_{gen}$  

Conduction equation in spherical coordinates:  
$\rho c \frac{\partial T}{\partial t} =\frac1{r^2} \frac{\partial}{\partial r} \Big(kr^2 \frac{\partial T}{\partial r} \Big) +\frac1{r^2sin^2\theta} \frac{\partial}{\partial\phi} \Big(k \frac{\partial T}{\partial\phi} \Big) +\frac1{r^2sin\theta} \frac{\partial}{\partial\theta} \Big(ksin\theta \frac{\partial T}{\partial\theta} \Big) +\dot e_{gen}$  

---

### Boundary Conditions

**Constant Surface Temperature**  
$T(0,t)=T_1$  
$T(L,t)=T_2$  

**Constant Heat Flux**  
Supply of heat into control volume:  
$\dot q_{supply}=-k \frac{\partial T}{\partial x} \Big|_{x=0}$  

Insulated (adiabatic) surface:  
$\frac{\partial T}{\partial x} \Big|_{x=0}=0$  

Geometry/thermal symmetry:  
$\frac{\partial T}{\partial x}=0$  
**Convection Boundary Condition**  
For 1D heat transfer in a plane wall:  
$-k\frac{\partial T}{\partial x} \Big|_{x=0} =h_1\big[T_{\infin_1} -T(0,t)\big]$  
$-k\frac{\partial T}{\partial x} \Big|_{x=L} =h_2\big[T(L,t) -T_{\infin_2}\big]$  

**Radiation Boundary Condition**  
For 1D heat transfer in a plane wall:  
$-k\frac{\partial T}{\partial x} \Big|_{x=0} =\varepsilon_1\sigma\Big[ {T_{surr,1}}^4 -{T(0,t)}^4\Big]$  
$-k\frac{\partial T}{\partial x} \Big|_{x=L} =\varepsilon_2\sigma\Big[ {T(L,t)}^4 -{T_{surr,2}}^4\Big]$  

**Interface Boundary Condition**  
Interface of two mediums in contact:  
$T_A(x_0,t)=T_B(x_0,t)$  
$-k_A \frac{\partial T_A}{\partial x} \Big|_{x=x_0} =-k_B \frac{\partial T_B}{\partial x} \Big|_{x=x_0}$  

---

### Heat Generation in a Solid

**Conduction in a Plane Wall**  
Asymmetrical boundary condition:  
$T(x) =\frac{\dot e_{gen}}{2k}L^2 \Big(1-\frac{x^2}{L^2}\Big) +\frac{T_2-T_1}{2L}x +\frac{T_1+T_2}{2}$  

Symmetrical boundary condition:  
$T(x) =\frac{\dot e_{gen}}{2k}L^2 \Big(1-\frac{x^2}{L^2}\Big) +T_s$  
$T_s =\frac{\dot e_{gen}}{h}L+T_\infin$  
$T_{max} =\frac{\dot e_{gen}}{2k}L^2+T_s$  

Adiabatic boundary condition:  
$T(x) =\frac{\dot e_{gen}}{2k}L^2 \Big(1-\frac{x^2}{L^2}\Big) +T_s$  
$T_s =\frac{\dot e_{gen}}{h}L+T_\infin$  

**Conduction in a Solid Cylinder**  
Temperature distribution:  
$T(r) =\frac{\dot e_{gen}}{4k}{r_o}^2 \Big(1-\frac{r^2}{{r_o}^2}\Big) +T_s$  
$T_s=T_{max} -\frac{\dot e_{gen}}{4k}{r_o}^2$  

## Steady Heat Conduction

Conduction resistance:  
$\dot Q_{cond} =\frac{T_1-T_2}{L/kA} =\frac{T_1-T_2}{R_{wall}}$  

Convection resistance:  
$\dot Q_{conv} =\frac{T_s-T_\infin}{1/hA_s} =\frac{T_s-T_\infin}{R_{conv}}$  

Radiation resistance:  
$\dot Q_{rad} =\frac{T_s-T_{surr}}{1/h_{rad}A_s} =\frac{T_s-T_{surr}}{R_{rad}}$  

### Conduction in a Plane Wall

Thermal resistance total heat transfer equation:  
$\dot Q =\frac{T_{\infin_1} -T_{\infin_2}}{R_{total}} =\frac{\Delta T}{\sum R} =UA\cdot\Delta T$  
*where *$U$* is the overall heat transfer coefficient*  

Multilayer plane wall:  
$\dot Q =\frac{T_i-T_j}{R_{\ i-j}}$  
*where *$i-j$* follows the direction of steady heat transfer,  
and *$R_{i-j}$* is the thermal resistance between locations *$i$* and *$j$  

Thermal contact resistance:  
$R_{tc}'' =\frac1{h_{tc}} =\frac{\Delta T_{interface}} {\dot Q/A}$  

Thermal contact conductance:  
$h_{tc} =\frac{\dot Q/A} {\Delta T_{interface}}$  

### Conduction in a Hollow Cylinder and Sphere

Total heat transfer for a hollow cylinder:  
$\dot Q_{cond,cyl} =2\pi Lk\cdot \frac{T_1-T_2}{ln(r_2/r_1)}$  
$R_{cyl} =\frac{ln(r_2/r_1)}{2\pi Lk}$  
*where *$r_2$* is outer radius and *$r_1$* is inner radius*  

Total heat transfer for a hollow sphere:  
$\dot Q_{cond,sph} =4\pi k(T_1-T_2)\cdot \frac{r_1r_2}{r_2-r_1}$  
$R_{sph} =\frac{r_2-r_1}{4\pi r_1r_2k}$  
*where *$r_2$* is outer radius and *$r_1$* is inner radius*  

Multilayer plane cylinder or sphere:  
$\dot Q =\frac{T_i-T_j}{R_{\ i-j}}$  
*where *$i-j$* follows the direction of steady heat transfer,  
and *$R_{i-j}$* is the thermal resistance between locations *$i$* and *$j$  

Critical radius of insulation:  
$r_{cr,cyl}=\frac kh$  
$r_{cr,sph}=\frac{2k}{h}$  

### Heat Transfer from Extended Surfaces (Fins)

General heat transfer equation for a fin:  
$0=\frac{d}{dx}\Big( kA_c\frac{dT}{dx}\Big) -hp(T-T_\infin)$  
*Note that the equation includes both thermal conductivity   
of the fin and convection coefficient of the surrounding fluid.*  

Fin with constant cross section and thermal conductivity,  
$0 =\frac{d^2T}{dx^2} -\frac{hp}{kA_c}(T-T_\infin)$  
$0 =\frac{d^2\theta}{dx^2}-m^2\theta$  
*where excess temperature *$\theta=T-T_\infin$* and *$m^2=\frac{hp}{kA_c}$  

General solutions to differential equation:  
$\theta(x) =C_1e^{mx}+C_2e^{-mx}$  
$\theta(x) =C_1cosh(mx)+C_2sinh(mx)$  

Excess temperature definition (base of the fin):  
$\theta(0) =\theta_b =T_b-T_\infin$  

#### Boundary Conditions at Fin Tip

Procedure for fin calculation:  
- If it is stated that the fin is infinite, or the fin tip has a specified temperature, 
or the fin has an adiabatic tip, use the respective equations for each scenario
- If $mL\ge2.65$ (for fin heat transfer) or $mL\ge4.6$ (for fin 
heat transfer and fin temperature), use infinite fin equation
- If the ratio $\frac{A_c}{A_{fin}}$ is extremely small, use adiabatic fin equation
- Else, use convective tip equation or approximate using $L_c$

Infinitely long fin, where $T_{tip}=T_\infin$:  
$\frac{\theta}{\theta_b} =\frac{T-T_\infin}{T_b-T_\infin} =e^{-mx} =e^{-x\sqrt{hp/kA_c}}$  
$\dot Q_{fin} =\sqrt{hpkA_c}(T_b-T_\infin)$  

Adiabatic fin tip, where $\dot Q_{tip}=0$:  
$\frac{\theta}{\theta_b} =\frac{T-T_\infin}{T_b-T_\infin} =\frac{cosh\ m(L-x)}{cosh\ mL}$  
$\dot Q_{fin} =\sqrt{hpkA_c}(T_b-T_\infin) \cdot tanh\ mL$  

Specified temperature at fin tip, where $T_{tip}=T_L$:  
$\frac{\theta}{\theta_b} =\frac{T-T_\infin}{T_b-T_\infin} =\frac{(\theta_L/\theta_b) sinh\ mx+sinh\ m(L-x)} {sinh\ mL}$  
$\dot Q_{fin} =\sqrt{hpkA_c}(T_b-T_\infin)\cdot \frac{cosh\ mL -(\theta_L/\theta_b)}{sinh\ mL}$  

Convective heat loss at fin tip:  
$\frac{\theta}{\theta_b} =\frac{T-T_\infin} {T_b-T_\infin} =\frac{cosh\ m(L-x) +(h/mk)sinh\ m(L-x)} {cosh\ mL+(h/mk)sinh\ mL}$  
$\dot Q_{fin} =\sqrt{hpkA_c}(T_b-T_\infin)\cdot \frac{sinh\ mL+(h/mk)cosh\ mL} {cosh\ mL+(h/mk)sinh\ mL}$  

#### Fin Effectiveness

If $\varepsilon_{fin}\ge2$, the addition of fins is beneficial.  

Effectiveness of a fin:  
$\varepsilon_{fin} =\frac{\dot Q_{fin}} {\dot Q_{no\ fin}} =\frac{\dot Q_{fin}} {hA_b(T_b-T_\infin)}$  
$\varepsilon_{fin}=1$* indicates that adding fins does not affect heat transfer at all.  
*$\varepsilon_{fin}<1$* indicates that the fin acts as insulation (reduce heat transfer).  
*$\varepsilon_{fin}>1$* indicates that the fin increases heat transfer from the surface.*  

Effectiveness of an infinite fin with uniform cross-section:  
$\varepsilon_{long\ fin} =\frac{\sqrt{hpkA_c} (T_b-T_\infin)} {hA_b(T_b-T_\infin)} =\sqrt{\frac{kp}{hA_c}}$  

#### Fin Efficiency

Maximum heat transfer from a fin:  
$\dot Q_{fin,max} =hA_{fin}(T_b-T_\infin)$  
*where *$A_{fin}$* is total surface area of fin*  

Fin efficiency:  
$\eta_{fin} =\frac{\dot Q_{fin}} {\dot Q_{fin,max}} =\frac{\dot Q_{fin}} {hA_{fin}(T_b-T_\infin)}$  

Thermal resistance of a fin:  
$R_{fin} =\frac{T_b-T_\infin}{\dot Q_{fin}} =\frac{1}{hA_{fin}\eta_{fin}}$  

Efficiency of a fin with an adiabatic tip:  
$\eta_{adiab}=\frac{tanh\ mL}{mL}$  

**Corrected Fin Length**  
Fin with convective heat loss at the tip:  
$L_c=L+\frac{A_c}{p}$  

Rectangular cross-section fin:  
$L_{c,rect}=L+\frac{t}{2}$  
Cylindrical cross-section fin:  
$L_{c,cyl}=L+\frac{D}{4}$  
*For a rectangular fin, if *$\frac{ht}{2k}<0.0625$*, use *$L_{c,rect}$*.*  
*For a pin fin, if *$\frac{hD}{2k}<0.0625$*, use *$L_{c,cyl}$*.*  

**Overall Efficiency (Multiple Fins)**  
Overall surface efficiency:  
$\eta_{o} =\frac{\dot Q_{tot}}{\dot Q_{max}} =\frac{\dot Q_{tot}} {hA_{tot}(T_b-T_\infin)}$  
*where *$A_{tot}$* is total exposed area   
of the fin and un-finned surfaces*  

Alternative equation,  
$\dot Q_{tot} =\dot Q_{fin}+\dot Q_{unfin}$  
$\dot Q_{tot} =\eta_{fin}hA_{fin}\theta_b +hA_b\theta_b$  
$\dot Q_{tot} =h\theta_b(\eta_{fin}A_{fin}+A_b)$  
$\dot Q_{tot} =h\theta_b\Big[\eta_{fin}A_{fin} +(A_{tot}-A_{fin})\Big]$  
$\dot Q_{tot} =hA_{tot}\theta_b\Big[ 1-\frac{A_{fin}}{A_{tot}} (1-\eta_{fin})\Big]$  
$\eta_o=1 -\frac{A_{fin}}{A_{tot}} (1-\eta_{fin})$  
*Note that *$A_{fin}$* is total surface area of the fins.*  

## Transient Heat Conduction

Lumped capacitance equation:  
$\frac{\theta}{\theta_i} =\frac{T(t)-T_\infin} {T_i-T_\infin} =e^{-t/\tau}$  
*where time constant *$\tau=\frac{\rho Vc}{hA_s}$  

Biot number:  
$Bi =\frac{\dot Q_{conv}} {\dot Q_{cond}} =\frac{hA\Delta T}{kA \frac{\Delta T}{L}} =\frac{hL}{k}$  
*Lumped capacitance model is valid if *$Bi<0.1$*.*  

Characteristic length for an arbitrary shape:  
$L_c=\frac{V}{A_s}$  

Alternative lumped capacitance equation:  
$\frac{\theta}{\theta_i} =\frac{T(t)-T_\infin} {T_i-T_\infin} =e^{-Bi\cdot Fo}$  
*where Fourier number *$Fo=\frac{\alpha t}{{L_c}^2}$  

Total heat transfer from a body to the environment:  
$Q=\rho Vc(1-e^{-t/\tau})$  

Total heat transfer from the environment to a body:  
$Q=-\rho Vc(1-e^{-t/\tau})$  

## Fundamentals of Convection

Fluid in contact with a surface:  
$\dot q_{conv}=\dot q_{cond}$  
$h_x(T_s-T_\infin) =-k_{f} \frac{\partial T}{\partial y} \Big|_{y=0}$  
$h_x=\frac{-k_f \frac{\partial T}{\partial y} \Big|_{y=0}} {T_s-T_\infin}$  
*Due to the no-slip condition, heat transfer from a solid’s surface   
to the fluid layer adjacent to the surface is by pure conduction.*  

Reynolds number:  
$Re =\frac{\rho VL}{\mu} =\frac{VL}{\nu}$  
Nusselt number:  
$Nu=\frac{hL_c}{k_f}$  
Prandtl number:  
$ Pr =\frac{\mu c_p}{k} =\frac{\nu}{\alpha}$  

---

### Velocity Boundary Layer

Shear stress of fluid in contact with surface:  
$\tau_s=\mu \frac{\partial u}{\partial y} \Big|_{y=0}$  

Local friction coefficient:  
$C_{f,x} =\frac{\tau_{s,x}} {\frac12\rho V^2}$  
Average friction coefficient:  
$\bar C_f =\frac1L\int^L_0\ C_{f,x}\ dx$  

Total drag force on a surface:  
$F_f =\bar\tau_sA_s =\frac12\rho V^2A_s\bar C_f$  

---

### Differential Convection Equations

Continuity equation:  
$\frac{\partial u} {\partial x} +\frac{\partial v} {\partial y}=0$  

Simplified $x$-momentum equation:  
$u\frac{\partial u}{\partial x} +v\frac{\partial u}{\partial y} =\nu \frac{\partial^2u}{\partial y^2} -\frac1\rho \frac{\partial P}{\partial x}$  
*Inertia forces = Viscous + Pressure forces*  
*Note that for a flat plate, *$\frac{\partial P}{\partial x}=0$*.*  
Simplified $y$-momentum equation:  
$ \frac{\partial P}{\partial y}=0$  

Simplified energy equation:  
$u\frac{\partial T}{\partial x} +v\frac{\partial T}{\partial y} =\alpha \frac{\partial^2T}{\partial y^2} +\frac{\nu}{c_p} \Big( \frac{\partial u}{\partial y} \Big)^2$  
*Advection = Conduction + Viscous Dissipation*  

---

### Laminar Flow over a Flat Plate

Reynolds analogy:  
$C_{f,x}=\frac2{Re_L}Nu_x$  
$St_x =\frac{C_{f,x}}{2} =\frac{Nu_x}{Re_LPr} =\frac{h_x}{\rho c_pV}$  
*Equations are only valid for when *$Pr=1$*.*  

Chilton-Colburn analogy (modified Reynolds analogy):  
$C_{f,x}\frac{Re_L}{2} =Nu_xPr^{-1/3}$  
$\frac{C_{f,x}}{2} =St_xPr^{2/3}=j_H$  
*Equations are only valid for *$ 0.6<Pr<60$*.*  

## External Forced Convection

Fluid properties at evaluated at film temperature:  
$T_{film} =\frac{T_s+T_\infin}{2}$  

Correction for $\nu$ if $P_\infin\ne P_{atm}$:  
$\nu =\frac{P_{atm}}{P_\infin} \cdot\nu_{1atm}$  
*Correction for kinematic viscosity is only required for gases.*  

---

### Flow over Flat Plates

Critical Reynolds number for a flat plate:  
$Re_{cr} =\frac{\rho Vx_{cr}}{\mu} =5\times10^5$  
*Reynolds number at which flow transitions from laminar to turbulent.*  

Boundary layer thickness:  
$\delta=\frac{4.91x}{\sqrt{Re_x}}$ *(Laminar)*  
$\delta=\frac{0.38x}{{Re_x}^{1/5}}$ *(Turbulent)*  
Local friction coefficient:  
$C_{f,x} =\frac{0.664}{\sqrt{Re_x}}$ *(Laminar)*  
$C_{f,x} =\frac{0.059}{{Re_x}^{1/5}}$ *(Turbulent)*  

Average friction coefficient:  
$\bar C_f =\frac{1.33}{\sqrt{Re_L}}$ *(Laminar)*  
$\bar C_f =\frac{0.074}{{Re_L}^{1/5}}$ *(Turbulent)*  
$\bar C_f =\frac{0.074}{{Re_L}^{1/5}} -\frac{1742}{Re_L}$ *(Laminar + Turbulent)*  

Local Nusselt number:  
$Nu_x=0.332{Re_x}^{1/2}Pr^{1/3}$ *(Laminar + *$Pr>0.6$*)*  
$Nu_x=0.0296{Re_x}^{4/5}Pr^{1/3}$ *(Turbulent + *$0.6\le Pr\le 60$*)*  
$Nu_x =0.565(Re_xPr)^{1/2} =0.565{Pe_x}^{1/2}$ *(Liquid metals with high *$k$*)*  

Average Nusselt number:  
$\bar{Nu} =0.664{Re_L}^{1/2}Pr^{1/3}$ *(Laminar)*  
$\bar{Nu} =0.037{Re_L}^{4/5}Pr^{1/3}$ *(Turbulent)*  
$\bar{Nu} =(0.037{Re_L}^{4/5}-871)Pr^{1/3}$ *(Laminar + Turbulent)*  

---

### Flow across Cylinders and Spheres

Average Nusselt number (cylinder):  
$ \bar{Nu}_{cyl} =\frac{\bar hD}{k} =0.3+\frac{0.62Re^{1/2}Pr^{1/3}} {\big[1+(0.4/Pr)^{2/3}\big]^{1/4}} \Big[1+\big( \frac{Re}{282000} \big)^{5/8}\Big]^{4/5}$  

Average Nusselt number (sphere):  
$\bar{Nu}_{sph} =\frac{\bar hD}{k} =2+\big[0.4Re^{1/2} +{0.06Re^{2/3}}\big]Pr^{2/5} \Big(\frac{\mu_\infin}{\mu_s}\Big)^{1/4}$  
*where fluid properties are evaluated at the freestream temperature and,*  
$3.5\le Re\le8\times10^4$*, and *$0.7\le Pr\le380$*, and *$1.0\le\frac{\mu_\infin}{\mu}\le3.2$  

Average Nusselt number (sphere):  
$\bar{Nu}_{sph}=2$  
*for *$ Re\le0.5$* and *$C_D=\frac{24}{Re}$  

## Internal Forced Convection

Average velocity of a flow:  
$V_{avg} =\frac{2}{R^2}\int^R_0\  r\cdot u(r)\ dr$  
*where *$u(r)$* is the velocity profile*  
Mean temperature of a flow:  
$T_m =\frac2{V_{avg}R^2}\int^R_0\  r\cdot T(r)u(r)\ dr$  
*where *$T(r)$* is the temperature profile*  

Bulk mean fluid temperature of a flow:  
$T_{m,bulk} =\frac{Inlet+Exit}{2} =\frac{T_{m,i}+T_{m,e}}{2}$  

---

### Entrance Region

Entry region (laminar flow):  
$x=0.05Re_D\cdot D$  
*where *$Re_D<2300$  

Thermal entry length (laminar flow):  
$L_{t,lami}=0.05Re_DPrD$  
Entry region (turbulent flow):  
$x>10D$  
*where *$Re_D>2300$  

Thermal entry length (turbulent flow):  
$L_{t,turb}>10D$  

**Hydraulic Diameters**  
Hydraulic diameter (non-circular tubes):  
$D_h=\frac{4A_c}{p}$  
*where *$p$* is the wetted diameter*  

Hydraulic diameter of an annulus:  
$D_h=D_o-D_i$  
*where *$D_o$* is outer diameter and *$D_i$* is inner diameter*  

---

### General Thermal Analysis

From 1st law of thermodynamics, heat transfer to a fluid:  
$\dot Q=\dot mc_p(T_{m,e}-T_{m,i})$  

Surface heat flux:  
$\dot q_s=h_x(T_s-T_m)$  

**Constant Surface Heat Flux**  
Surface heat flux:  
$\dot Q=\dot q_sA_s$  
$\dot Q=hA_s(T_s-T_m)$  
$\dot Q=\dot mc_p(T_{m,e}-T_{m,i})$  

Mean fluid temperature at exit:  
$T_{m,e}=T_{m,i} +\frac{\dot q_sA_s}{\dot mc_p}$  
$T_m(x)=T_{m,i} +\frac{\dot q_sp}{\dot mc_p}x$  

Surface temperature of exit:  
$T_{s,e} =T_{m,e}+\frac{\dot q_s}{h}$  

Relations between equations:  
$\frac{\partial T}{\partial x} =\frac{dT_s}{dx} =\frac{dT_m}{dx} =\frac{\dot q_sp}{\dot mc_p} =\frac{h(T_s-T_m)\pi D}{\dot mc_p}$  
**Constant Surface Temperature**  
Mean fluid temperature at exit:  
${ln\frac{T_s-T_{m,e}} {T_s-T_{m,i}}} =-\frac{\bar hA_s}{\dot mc_p}$  

LMTD:  
$\Delta T_{lm} =\frac{\Delta T_{m,e} -\Delta T_{m,i}} {ln(\Delta T_{m,e} /\Delta T_{m,i})}$  
*where *$\Delta T_{m,e}=T_{s,e}-T_{m,e}$*   
and *$\Delta T_{m,i}=T_{s,i}-T_{m,i}$  

Number of transfer units (NTU):  
$NTU =\frac{\bar hA_s}{\dot mc_p} =\frac{\bar hpx}{\dot mc_p}$  

---

### Average Nusselt Numbers

**Laminar Flow**  
Fully developed flow (both velocity and temperature profiles are developed):  
$Nu=4.36$ *(constant surface heat flux)*  
$Nu=3.66$ *(constant surface temperature)*  

Fully developed velocity profile only (constant surface temperature):  
$\bar{Nu}_D =3.66+\frac{0.065(D/L)RePr} {1+0.04\big[(D/L)RePr\big]^{2/3}}$  

Not yet developed flow (constant surface temperature):  
$\bar{Nu}_D=1.86 \Big(\frac{RePrD}{L}\Big)^{1/3} \Big(\frac{\mu_{bulk}}{\mu_s} \Big)^{0.14}$  
*where *$0.6\le Pr\le5$* and *$0.0044\le \frac{\mu_{bulk}}{\mu_s} \le9.75$  

**Turbulent Flow**  
$Nu_D ={0.023Re_D}^{4/5}{Pr}^n$  
*where *$Re_D\ge10000$*, and *$0.7\le Pr\le160$*, and *$\frac{L}{D}\ge10$  

For heating, where $T_s>T_m$ the exponent $n=0.4$.  
For cooling, where $T_s<T_m$ the exponent $n=0.3$.  

## Natural Convection

Volume expansion coefficient:  
$\beta =\frac1{\sout V}\Big( \frac{\partial\sout V} {\partial T}\Big)_P =-\frac1{\rho}\Big( \frac{\partial\rho} {\partial T}\Big)_P$  
$\rho_\infin-\rho_s =\rho\beta(T_s-T_\infin)$  
For an ideal gas:  
$\beta=\frac1{T_{film}}$  
*where temperature is in Kelvins  
(only applicable to ideal gases)*  

Grashof number:  
$Gr_L =\frac{g\beta(T_s-T_\infin){L_c}^3}{\nu^2}$  
*If *$\frac{Gr_L}{{Re_L}^2}\gg1$*, natural convection effects dominate.*  
*If *$\frac{Gr_L}{{Re_L}^2}\ll1$*, forced convection effects dominate.*  
*If *$\frac{Gr_L}{{Re_L}^2}=1$*, both effects must be considered.*  

Rayleigh number:  
$Ra_L =\frac{g\beta(T_s-T_\infin){L_c}^3Pr}{\nu^2} =\frac{g\beta(T_s-T_\infin){L_c}^3}{\nu\alpha}$  

---

### Natural Convection over Surfaces

**Vertical Plate**  
Laminar or turbulent flow:  
$Nu_{\ lami}={0.59Ra_L}^{1/4}$     *where *$10^4<Ra_L<10^9$  
$Nu_{\ turb}={0.1Ra_L}^{1/3}$     *where *$10^9<Ra_L<10^{13}$  

Average Nusselt number for laminar flow:  
$\bar{Nu}_L=0.68 +\frac{0.67{Ra_L}^{1/4}} {\big[1+(0.492/Pr)^{9/16} \big]^{4/9}}$  

Average Nusselt number for entire range of Rayleigh number:  
$\bar{Nu}_L =\Bigg\{0.825 +\frac{{0.387Ra_L}^{1/6}} {\big[1+(0.492/Pr)^{9/16} \big]^{8/27}} \Bigg\}^2$  

**Horizontal Plate**  
Characteristic length:  
$L_c =\frac{Heat\ Transfer\ Area} {Perimeter}=\frac{A_s}{p}$  

Nusselt numbers for upper surface of hot plate or lower surface of cold plate:  
$\bar{Nu}_L={0.54Ra_L}^{1/4}$     *where *$10^4<Ra_L<10^7$  
$\bar{Nu}_L={0.15Ra_L}^{1/5}$     *where *$10^7<Ra_L<10^{11}$  

Nusselt numbers for lower surface of hot plate or upper surface of cold plate:  
$\bar{Nu}_L={0.27Ra_L}^{1/4}$     *where *$10^5<Ra_L<10^{11}$  

**Vertical Cylinder**  
Treated as a vertical plate if:  
$D\ge\frac{35L}{{Gr_L}^{1/4}}$  
*where *$L$* is the height of the cylinder*  

**Horizontal Cylinder**  
Average Nusselt number:  
$\bar{Nu}_D =\Bigg\{0.6 +\frac{{0.387Ra_D}^{1/6}} {\big[1+(0.559/Pr)^{9/16}\big] ^{8/27}}\Bigg\}^2$  
*where *$Ra_D\le10^{12}$  

**Sphere**  
Average Nusselt number:  
$\bar{Nu}_D=2 +\frac{{0.589Ra_D}^{1/4}} {\big[1+(0.469/Pr)^{9/16} \big]^{4/9}}$  
*where *$Ra_D\le10^{11}$* and *$Pr\ge0.7$  

## Heat Exchangers

### Overall Heat Transfer Coefficient

Total thermal resistance:  
$R_{tot} =R_{conv,i} +R_{wall}+R_{conv,o}$  
$\frac1{UA_s} =\frac1{h_iA_i} +\frac{ln(D_o/D_i)}{2\pi kL} +\frac1{h_oA_o}$  

Total thermal resistance with fouling:  
$\frac1{UA_s} =\frac1{h_iA_i} +\frac{R_{f,i}}{A_i} +\frac{ln(D_o/D_i)}{2\pi kL} +\frac{R_{f,o}}{A_o} +\frac1{h_oA_o}$  
*where *$R_{f,i}$* and *$R_{f,o}$* are the fouling factors of the inner and outer surfaces*  

---

### Log Mean Temperature Difference

Rate of heat transfer in exchanger:  
$\dot Q=UA_s\Delta T_{lm}$  
*Parallel-flow double-pipe: *$\Delta T_2 =T_{h,out}-T_{c,out}$* and *$\Delta T_1 =T_{h,in}-T_{c,in}$*  
Counter-flow double-pipe: *$\Delta T_2 =T_{h,out}-T_{c,in}$* and *$\Delta T_1 =T_{h,in}-T_{c,out}$*  
Note that the above equation is only valid for double-pipe heat exchangers.*  

Correction factor for cross-flow and shell-and-tube exchangers:  
$\Delta T_{lm} =F\cdot\Delta T_{lm,CF}$  

Special cases where $F=1$:  
- Temperature of one fluid is constant (condensation/boiling)
- Both fluids have the same heat capacity in a counter-flow double-pipe exchanger

---

### Effectiveness — NTU

Heat capacities of cold and hot fluid:  
$C_c=\dot m_cc_{p,c}$  
$C_h=\dot m_hc_{p,h}$  
*where *$c_p$* are the specific heat capacities*  

Effectiveness of a heat exchanger:  
$\varepsilon =\frac{\dot Q_{actual}} {\dot Q_{max}} =\frac{\dot Q_{actual}} {C_{min}(T_{h,in}-T_{c,in})}$  
*where *$C_{min}$* is the smaller of *$C_h$* and *$C_c$  

Effectiveness of a parallel-flow double-pipe exchanger:  
$\varepsilon_{para} =\frac{1-exp\big[-NTU(1+c)\big]} {1+c}$  
*where *$NTU=\frac{UA_s}{C_{min}}$* and heat capacity ratio *$c=\frac{C_{min}}{C_{max}}$  

## Radiation Heat Transfer

Absorptivity:  
$\alpha =\frac{Absorbed}{Incident} =\frac{G_{abs}}{G}$  
Reflectivity:  
$\rho =\frac{Reflected}{Incident} =\frac{G_{ref}}{G}$  
Transmissivity:  
$\tau =\frac{Transmit}{Incident} =\frac{G_{tr}}{G}$  
*where *$G$* is irradiation*  

---

### View Factor

Reciprocity relation:  
$A_iF_{ij}=A_jF_{ji}$  
*Note that *$F_{ij}\ne F_{ji}$* unless the areas of both surfaces are equal.*  

Summation rule:  
$\sum\limits^n\limits_{j=1}  F_{i\rightarrow j} =F_{1\rightarrow1} +F_{1\rightarrow2}+\dots +F_{1\rightarrow n} =1$  
*Note that the rule only applies to enclosures (enclosed surfaces).*  

Superposition rule:  
$F_{i\rightarrow j} =F_{i\rightarrow j1} +F_{i\rightarrow j2}+\dots +F_{i\rightarrow jn}$  
Note that $F_{ji}\neq F_{j1\rightarrow i} +F_{j2\rightarrow i}+\dots +F_{jn\rightarrow i}$.  

Symmetry rule:  
$F_{ij}=F_{ik}$  
*Two or more surfaces that possess symmetry about a common surface.*  

---

### Radiation Exchange between Surfaces

Radiosity of a surface:  
$J=E_{emit}+G_{ref}$  
$J=\varepsilon E_b+\rho G$  
$J=\varepsilon E_b+(1-\varepsilon)G$  
$G=\frac{J-\varepsilon E_b} {1-\varepsilon}$  
*For a gray, opaque surface, *$\tau=0$*.*  
$1=\alpha+\rho+\tau$  
$\rho=1-\alpha$  
$\rho=1-\varepsilon$  

Net energy leaving a surface:  
$\frac{\dot Q}{A} =J-G$  
$\frac{\dot Q}{A}=J -\frac{J-\varepsilon E_b} {1-\varepsilon}$  
$\frac{\dot Q}{A} =\frac{J(1-\varepsilon) -(J-\varepsilon E_b)} {1-\varepsilon}$  
$\frac{\dot Q}{A} =\frac{(E_b-J)\varepsilon} {1-\varepsilon}$  

Blackbody emissive power:  
$E_{bi}=\sigma{T_i}^4$  
*where *$T_i$* is temperature of the surface in Kelvins*  

**Surface Resistance to Radiation**  
$\dot Q_i =\frac{E_{bi}-J_i} {(1-\varepsilon_i) /\varepsilon_iA_i} =\frac{E_{bi}-J_i}{R_i}$  
$R_i =\frac{1-\varepsilon_i} {\epsilon_iA_i}$  
*If *$E_b>J$*, heat loss from the surface.  
If *$E_b<J$*, heat gain by the surface.*  
For a blackbody, $\varepsilon=1$ and $\alpha=1$,  
$R_i=0$  
$E_{bi}=J_i$  

**Space Resistance between 2 Surfaces**  
Net radiation exchange between 2 surfaces:  
$\dot Q_{i-j} =J_iA_iF_{i-j} -J_jA_jF_{j-i}$  
$\dot Q_{i-j} =J_iA_iF_{i-j} -J_jA_iF_{i-j}$  
$\dot Q_{i-j} =A_iF_{i-j}(J_i-J_j)$  
$\dot Q_{i-j} =\frac{J_i-J_j}{1/(A_iF_{i-j})}$  
$R_{i-j} =\frac1{A_iF_{i-j}}$  

**Resistance Network of Multiple Surfaces**  
Network consists of:  
- Surface resistance of each surface
- Space resistance between surfaces
- Sum of heat transfer at each radiosity node is zero

Node equations:  
$\frac{E_{b1}-J_1}{R_1} +\frac{J_2-J_1}{R_{12}} +\frac{J_3-J_1}{R_{13}}=0$  
$\frac{E_{b2}-J_2}{R_2} +\frac{J_1-J_2}{R_{12}} +\frac{J_3-J_2}{R_{23}}=0$  
$\frac{E_{b3}-J_3}{R_3} +\frac{J_1-J_3}{R_{13}} +\frac{J_2-J_3}{R_{23}}=0$  

---

### Radiation Shielding

Rate of heat transfer between infinite parallel plates with 1 radiation shield:  
$\dot Q_{12,\ one\ shield} =\frac{E_{b1}-E_{b2}} {\frac{1-\varepsilon_1} {\varepsilon_1A_1} +\frac1{A_1F_{13}} +\frac{1-\varepsilon_{3,1}} {\varepsilon_{3,1}A_3} +\frac{1-\varepsilon_{3,2}} {\varepsilon_{3,2}A_3} +\frac1{A_3F_{32}} +\frac{1-\varepsilon_2} {\varepsilon_2A_2}}$  

Rate of heat transfer between infinite parallel plates with $N$ shields:  
$\dot Q_{12,\ N\ shields} =\frac{A\sigma({T_1}^4-{T_2}^4)} {\big(\frac1{\varepsilon_1} +\frac1{\varepsilon_2}-1\big) +\big(\frac1{\varepsilon_{3,1}} +\frac1{\varepsilon_{3,2}}-1\big) +\ \dots\  +\big(\frac1{\varepsilon_{N,1}} +\frac1{\varepsilon_{N,2}}-1\big)}$  

If emissivities of all surfaces are equal, the above equation reduces to:  
$\dot Q_{12,\ N\ shields} =\frac1{N+1} \ \dot Q_{12,\ no\ shields} =\frac1{N+1} \bigg[\frac{A\sigma ({T_1}^4-{T_2}^4)} {\frac1\varepsilon +\frac1\varepsilon-1}\bigg]$  
