# MA2701 - Formulae

> MA2701 · FLIGHT PERFORMANCE — exported from Lousy Engineering

---

## The Standard Atmosphere

$P=\rho RT$ *where *$R=287.058\ J/kg\cdot K$  

Standard mean sea level (MSL) conditions:  
- $p_0=101325\ Pa$
- $\rho_0=1.225\ kg/m^3$
- $T_0=288.16\ K$ $(15\degree C)$
- $a_0=340.294\ m/s$
- $g_0=9.80665\ m/s^2$
Relevant unit conversions:  
- $1\ ft=0.3048\ m$
- $1\ kt=1.852\ km/h$

---

### Pressure and Density Variation

**Gradient Region (0 km < *****h***** < 11 km)**  
$\frac{p}{p_0} =\Big(\frac{T}{T_0}\Big) ^{-\frac{g_0}{aR}}$  
$\frac{\rho}{\rho_0} =\Big(\frac{T}{T_0}\Big) ^{-\frac{g_0}{aR}-1}$  
$T=T_0+a(h-h_0)$  
**Isothermal Region (11 km < *****h***** < 20 km)**  
$\frac{p}{p_1} =e^{-\frac{g_0}{RT}(h-h_1)}$  
$\frac{\rho}{\rho_1} =e^{-\frac{g_0}{RT}(h-h_1)}$  
*where *$h_0=0\ km$  
$T_0=288.16\ K$  
$p_0=101325\ Pa$  
$\rho_0=1.225\ kg/m^3$  
$a=-0.0065\ K/m$  
*where *$h_1=11000\ m$  
$T=216.65\ K$  
$p_1=22632.1\ Pa$  
$\rho_1=0.36391\ kg/m^3$  

---

### Flight Speed and Mach Number

Local speed of sound:  
Mach number:  
Density ratio:  
$a=\sqrt{\gamma RT}$ *where *$\gamma=\frac{c_p}{c_v}=1.4$* (for air)*  
$M=\frac{V}{a}$ *where *$V$* is aircraft’s airspeed*  
$\sigma=\frac{\rho_\infin}{\rho_0}$  

**Pitot-Static Tube**  
$p_1+\frac12\rho{V_1}^2 =p_2+\frac12\rho{V_2}^2$  
$V_\infin =\sqrt{\frac{2(p_{tot}-p_\infin)}{\rho_\infin}}$  

**Types of Airspeed**  
Indicated airspeed:  
Calibrated airspeed:  
Equivalent airspeed:  
True airspeed:  
$V_i$ *(instrument error, air compressibility error, air density error)*  
$V_c=V_i+\Delta V$ *(corrected for position/installation error)*  
$V_e=V_i+\Delta V$ *(corrected for compressibility of air)*  
$V_{\infin}=V_e \sqrt{\frac{\rho_0}{\rho_\infin}}$ *(corrected for air density error)*  

**Ground Speed**  
$V_g=V_\infin-V_{headwind}$     *(reduces takeoff run)*  
$V_g=V_\infin+V_{tailwind}$       *(reduces flight time)*  

## Review of Aerodynamics

### Lift and Drag (Airfoil)

Shear stress in a flow:  
$\tau =\mu\frac{dv}{dy} =\frac{2\mu V_\infin}{\delta}$  
*where *$\delta$* is boundary layer thickness*  

Symmetrical airfoil:  
$C_l=C_{l\alpha}\alpha$  
Cambered airfoil:  
$C_l=C_{l\alpha}(\alpha-\alpha_0)$  

**Flap Effectiveness**  
Lift coefficient with flaps deployed:  
$C_l=C_{l\alpha}(\alpha -\alpha_0+\tau\delta f)$  
$\tau=\frac{dC_l}{d\delta f} \cdot\frac{d\alpha}{dC_l} =\frac{d\alpha}{d\delta f}$  
*where *$\tau$* is flap effectiveness  
and *$\delta f$* is degree of flap deflection*  

---

### Lift and Drag (Wing)

Induced drag of a wing:  
$C_{D_i} =k{C_L}^2 =\frac{{C_L}^2}{\pi eAR}$  

Lift curve slope of a wing:  
$a=\frac{dC_L}{d\alpha} =\frac{a_0} {1+\frac{a_0}{\pi eAR}}$  
*where *$a_0$* is the lift curve slope of the airfoil*  

**Compressibility Corrections**  
For $AR>4$:  
Incompressible flow:     $a=\frac{a_0}{1+\frac{a_0}{\pi eAR}}$  
Subsonic flow:               $a=\frac{a_0} {\sqrt{1-{M_\infin}^2} +\frac{a_0}{\pi eAR}}$  
Supersonic flow:            $a=\frac{4} {\sqrt{{M_\infin}^2-1}}$  

For $AR<4$:  
Incompressible flow:      $a=\frac{a_0} {\sqrt{1+\big[ \frac{a_0}{\pi AR} \big]^2} +\frac{a_0}{\pi AR}}$  
Subsonic flow:                $a=\frac{a_0} {\sqrt{1-{M_\infin}^2+\big[ \frac{a_0}{\pi AR}\big]^2} +\frac{a_0}{\pi AR}}$  
Supersonic flow:             $a=\frac{4} {\sqrt{{M_\infin}^2-1}} \Big(1-\frac{1}{2AR \sqrt{{M_\infin}^2-1}}\Big)$  

---

### Lift and Drag (Aircraft)

Total drag of an aircraft:  
$C_D=C_{D_0}+C_{D_i}+C_{D_{wave}}$  
$D=\frac12\rho V^2SC_D$  
*where *$q=\frac12\rho V^2S$  

Drag/thrust required:  
$D=T_R=q\Big(C_{D_0}+k{C_L}^2\Big)$  
$D=T_R=AV^2+\frac{B}{V^2}$  
*where *$A=\frac12\rho SC_{D_0}$* and *$B=\frac{kW^2}{\frac12\rho S}$  

Speed at which drag is minimum:  
$V_{D_{min}}=\sqrt{ \frac{2W}{\rho S} \sqrt{\frac{k}{C_{D_0}}}}$  

Minimum drag speed at a given altitude:  
$V_h=V_0\sqrt{\frac1\sigma}$  
*where *$V_0$* is the minimum drag speed at sea level*  

Maximum lift-to-drag ratio:  
$\frac{L}{D}_{max} =\frac1{2\sqrt{kC_{D_0}}}$  

Minimum drag of an aircraft:  
$D_{min} =2L\sqrt{kC_{D_0}} ={2W}\sqrt{kC_{D_0}}$  
*Note that *$C_{D_0}=k{C_L}^2$* for minimum drag.  
Minimum drag is constant with respect to altitude.*  

## Review of Propulsion

### Jet

$T=m_{air}(V_{jet}-V_\infin) +m_{fuel}V_{jet}$  

Propulsive efficiency of a jet:  
$\eta_p=\frac{2} {1+\frac{V_{jet}}{V_\infin}}$  

---

### Propeller

$T=\frac12\rho A \Big({V_s}^2-{V_\infin}^2\Big)$  

Propulsive efficiency of a propeller:  
$\eta_p=\frac{2} {1+\frac{V_s}{V_\infin}}$  

**Thrust Generation of Turboprop**  
Propeller efficiency:  
$ \eta_{pr}=\frac{P_{prop}}{P_{shaft}}$  

Total propulsive power:  
$P=\eta_{pr}P_{es}$  
*where *$P_{es}$* is equivalent shaft power, which is total power including jet thrust*  

## Level Flight Performance

### Power Required

Lift coefficient for which power is minimum:  
$3C_{D_0}=k{C_L}^2$  
$C_{L_{P_{min}}} =\sqrt{\frac{3C_{D_0}}k}$  

Speed at which power is minimum:  
$V_{P_{min}} =\sqrt{\frac{2W}{\rho S} \sqrt{\frac{k}{3C_{D_0}}}}$  

Minimum power required:  
$P_{R_{min}} =\sqrt{\frac{2W^3}{\rho S}} \Big(\frac{C_D}{{C_L}^{3/2}} \Big)_{P_{min}}$  

---

### Level Flight

Turbojet aircraft:  
$\frac{T}{T_0}=\sigma^m$  
*Thrust is constant with flight speed.  
*$m\approx 1$* for turbojet aircraft.*  
Turboprop aircraft:  
$\frac{P}{P_0}=\sigma^n$  
*Power is constant with flight speed.  
*$n\approx 0.7$* for turboprop aircraft.*  

**Level Flight for Jet Aircraft**  
Thrust available at a given altitude:  
$T_A=T_0\cdot\sigma^m$  

Minimum and maximum flight speeds occur at points where $T_A=T_R$.  
$V_{min/max} =\bigg[\frac{T_A\pm \sqrt{{(T_A)}^2-{4AB}}}{2A}\ \bigg]^\frac12$  
$V_{min/max} =\sqrt{ \frac{\big(\frac{T_A}W\big) \big(\frac WS\big)\pm\frac WS \sqrt{\big(\frac{T_A}W\big)^2 -{4kC_{D_0}}}}{\rho C_{D_0}}}$  
*Note that at absolute ceiling, *$V_{min}=V_{max}=V_{D_{min}}$*.*  

Expressions for $A$ and $B$:  
$A=\frac12\rho SC_{D_0}$  
$B=\frac{kW^2}{\frac12\rho S}$  

Absolute ceiling (density altitude):  
$\rho=\rho_0\Big( \frac{D_{min}}{T_0}\Big) ^{\frac1m}$  
*where *$T_0$* is thrust available at sea level*  

## Climb Performance

### Equilibrium Equations

$\theta=\gamma+\alpha$  
*where *$\theta$* is pitch angle,  
*$\gamma$* is flight path (climb) angle,  
*$\alpha$* is angle of attack of aircraft*  
$L=Wcos\gamma$  
$T=D+Wsin\gamma$  
$R/C=Vsin\gamma$  
Load factor for climb:  
$n=cos\gamma$  

Rearranging the equilibrium equations:  
$R/C=\frac{V(T-D)}{W}$  
$SEP=\frac{P_A-P_R}{W}$  
$sin\gamma=\frac{T-D}{W}$  
$sin\gamma=\frac{SEP}{V}$  
*where *$SEP$* is specific excess power expressed in *$W/N$  

---

### Maximum Climb Rate (Graphical)

Plotting the graph:  
- Calculate $V_{min}$ and $V_{max}$ for the chosen altitude
- Calculate $P_A$ and $P_R$ for the range $V_{min}\le V\le V_{max}$
- Calculate $SEP$ for the range $V_{min}\le V\le V_{max}$
- Plot $SEP$ against flight speed $V$

**Jet Aircraft**  
$P_A=T_AV=(T_A\sigma^m)V$  
$P_R=T_RV=\Big( AV^2+\frac{B}{V^2}\Big)V$  
**Propeller Aircraft**  
$P_A=\eta_{pr}(P_0\sigma^m)$  
$P_R=T_RV=\Big( AV^2+\frac{B}{V^2}\Big)V$  

---

### Maximum Climb Rate (Analytical)

General equation for climb rate:  
$R/C=Vsin\gamma=V\bigg[ \frac{T}{W}-\frac12 \frac{\rho V^2C_{D_0}}{W/S} -\frac{W}{S}\Big( \frac{2k}{\rho V^2} \Big)\bigg]$  

**Jet Aircraft**  
Speed at which climb rate is maximum:  
$V_{R/C_{max}}=\sqrt{ \frac{Z\big(\frac{T}{W}\big) \big(\frac{W}{S}\big)} {3\rho C_{D_0}}}$  
$Z=1+\sqrt{1+\frac{3} {\big(\frac{L}{D}_{max}\big)^2 \big(\frac{T}{W}\big)^2}}$  

Maximum climb rate:  
$R/C_{max} =\sqrt{\frac{(W/S)Z} {3\rho C_{D_0}}} \Big(\frac{T}{W}\Big)^{\frac32} \Big[1-\frac{Z}{6}-\frac{3} {2(T/W)^2(L/D)^2_{max}Z}\Big]$  

**Propeller Aircraft**  
Speed at which climb rate is maximum:  
$V_{R/C_{max}}=V_{P_{min}} =\sqrt{\frac{2W}{\rho S} \sqrt{\frac{k}{3C_{D_0}}}}$  

Maximum climb rate:  
$R/C_{max} =\frac{P_A}{W} -\frac{1.155}{(L/D)_{max}} \sqrt{\frac{2W}{\rho S} \sqrt{\frac{k}{3C_{D_0}}}}$  

---

### Maximum Climb Angle

**Jet Aircraft**  
Speed at which climb angle is maximum:  
$V_{\gamma_{max}} =V_{D_{min}}=\sqrt{ \frac{2W}{\rho S} \sqrt{\frac{k}{C_{D_0}}}}$  
*Climb angle for jet aircraft is maximum when *$D$* is minimum.  
Since *$T_A$* is constant, minimum *$D$* gives highest excess thrust.*  

Maximum climb angle:  
$\gamma_{max}={sin^{-1}} \Big(\frac{T_A}{W} -\frac1{(L/D)_{max}}\Big)$  

Corresponding climb rate:  
$R/C_{\gamma_{max}} =V_{\gamma_{max}} sin\gamma_{max}$  

**Propeller Aircraft**  
Speed at which climb angle is maximum:  
$V_{\gamma_{max}} =\frac{4k(W/S)}{\rho(P_A/W)}$  

Maximum climb angle:  
$\gamma_{max}=sin^{-1} \bigg[ \frac{\rho(P_A/W)^2}{4k(W/S)} -\frac{8k^2(W/S)C_{D_0}} {\rho(P_A/W)^2} -\frac{\rho(P_A/W)^2}{8k(W/S)} \bigg]$  

Corresponding climb rate:  
$R/C_{\gamma_{max}} =V_{\gamma_{max}} sin\gamma_{max}$  

---

### Time to Climb

$R/C=Vsin\gamma=\frac{dh}{dt}$  
$t=\int^h_0\frac1{R/C}\ dh$  
*Altitude vs *$R/C$* graph is simply the equation of a straight line.  
Express *$R/C$* in terms of *$h$* and evaluate the integral.*  

## Glide Performance

### Equilibrium Equations

$\theta=\gamma-\alpha$  
*where *$\theta$* is pitch angle,  
*$\gamma$* is flight path (glide) angle,  
*$\alpha$* is angle of attack of aircraft*  
$L=Wcos\gamma$  
$D=Wsin\gamma$  
$\gamma =\frac{D}{L} =\frac{D}{W} =\frac{h}{R}$  
*Small angle approximation*  
Descent rate:  
$\frac{dh}{dt}=-V\gamma$  
$\frac{dh}{dt}=-\frac{DV}{W}$  
$\frac{dh}{dt}=-\frac{P_R}{W}$  

---

### Maximum Range

Speed at which range is maximum:  
$V_{R_{max}}=V_{D_{min}} =\sqrt{ \frac{2W}{\rho S} \sqrt{\frac{k}{C_{D_0}}}}$  
*Maximum range is achieved when *$\gamma$*, and thus *$D$* is minimum, since *$W$* is constant.*  

Maximum range:  
$R_{max}=\frac{h}{2\sqrt{kC_{D_0}}}$  

Corresponding glide angle:  
$\gamma_{R_{max}}=2\sqrt{kC_{D_0}}$  
*Glide angle is expressed in radians.*  

Corresponding angle of attack:  
$\alpha_{R_{max}} =\frac{\sqrt{C_{D_0}/k}}{C_{L\alpha}}+\alpha_0$  

Corresponding descent rate:  
$\frac{dh}{dt}_{R_{max}} =-\frac{2^{3/2}C_{D_0}} {(C_{D_0}/k)^{3/4}} \sqrt{\frac{W}{\rho S}}$  

Corresponding endurance:  
$E_{R_{max}} =\frac{(C_{D_0}/k)^{3/4}} {2^{3/2}C_{D_0}} \sqrt{\frac SW} \int^h_0\sqrt{\rho}\ dh$  
*Expression for *$\rho$* can be obtained from standard atmosphere equations.*  

---

### Maximum Endurance

Speed at which endurance is maximum:  
$V_{E_{max}}=V_{P_{min}} =\sqrt{\frac{2W}{\rho S} \sqrt{\frac{k}{3C_{D_0}}}}$  
*Maximum endurance is achieved when descent rate is minimum.  
Descent rate is minimized when *$P_R$* is minimum since *$W$* is constant.*  

Corresponding descent rate:  
$\frac{dh}{dt}_{E_{max}} =-\frac{2^{5/2}C_{D_0}} {(3C_{D_0}/k)^{3/4}} \sqrt{\frac{W}{\rho S}}$  

Maximum endurance:  
$E_{max} =\frac{(3C_{D_0}/k)^{3/4}} {2^{5/2}C_{D_0}} \sqrt{\frac{S}{W}} \int^h_0\sqrt\rho\ dh$  
*Expression for *$\rho$* can be obtained from standard atmosphere equations.*  

Corresponding glide angle:  
$\gamma_{E_{max}} =4\sqrt{\frac{kC_{D_0}}{3}}$  
*Glide angle is expressed in radians.*  

Corresponding angle of attack:  
$\alpha_{E_{max}} =\frac{\sqrt{3C_{D_0}/k}}{C_{L\alpha}}+\alpha_0$  

Corresponding range:  
$R_{E_{max}}=\frac{h}{4} \sqrt{\frac{3}{kC_{D_0}}}$  

---

### Comparison of Equations

**Maximum Range**  
$\gamma_{R_{max}} =\gamma_{min} =2\sqrt{kC_{D_0}}$  
$\frac{dh}{dt}_{R_{max}} =-\frac{2^{3/2}C_{D_0}} {(C_{D_0}/k)^{3/4}} \sqrt{\frac{W}{\rho S}}$  
$V_{R_{max}}=V_{D_{min}} =\sqrt{ \frac{2W}{\rho S} \sqrt{\frac{k}{C_{D_0}}}}$  
$R_{max}=\frac{h}{2\sqrt{kC_{D_0}}}$  
$E_{R_{max}} =\frac{(C_{D_0}/k)^{3/4}} {2^{3/2}C_{D_0}} \sqrt{\frac SW} \int^h_0\sqrt{\rho}\ dh$  
$C_{L_{R_{max}}}=C_{L_{D_{min}}} =\sqrt{\frac{C_{D_0}}{k}}$  
**Maximum Endurance**  
$\gamma_{E_{max}} =\frac2{\sqrt3}\gamma_{R_{max}}$  
$\frac{dh}{dt}_{E_{max}} =\frac{2}{3^{3/4}}\Big( \frac{dh}{dt}_{R_{max}}\Big)$  
$V_{E_{max}} =V_{P_{min}} =\frac1{3^{1/4}}V_{R_{max}}$  
$R_{E_{max}} =\frac{\sqrt3}{2}R_{max}$  
$E_{max} =\frac{3^{3/4}}{2}E_{R_{max}}$  
$C_{L_{E_{max}}} =C_{L_{P_{min}}} =\sqrt{\frac{3C_{D_0}}{k}}$  

## Level Turn Performance

### Equilibrium Equations

$Lcos\phi=W$  
$cos\phi=\frac1n$  
$L=nW$  
$R=\frac{V^2}{g\sqrt{n^2-1}}$  
$\omega=\frac{g\sqrt{n^2-1}}{V}$  
*where *$\omega$* is expressed in *$rad/s$  

---

### Minimum Turn Radius

$q_{R_{min}}=\frac{2k(W/S)}{T/W}$  

Speed at which turn radius is minimum:  
$V_{R_{min}} =\sqrt{\frac{4k(W/S)}{\rho(T/W)}}$  

Corresponding load factor:  
$n_{R_{min}}=\sqrt{2 -\frac{4kC_{D_0}}{(T/W)^2}}$  

Minimum radius:  
$R_{min} =\frac{4k(W/S)}{\rho g(T/W) \sqrt{1-\frac{4kC_{D_0}}{(T/W)^2}}}$  
*Note that the smallest possible turn radius is when thrust is at its maximum.*  

---

### Maximum Turn Rate

Maximum turn rate:  
$\omega_{max}=g\sqrt{ \frac{\rho}{W/S} \Big(\frac{T/W}{2k} -\sqrt{\frac{C_{D_0}}{k}}\Big)}$  

Corresponding load factor:  
$n_{\omega_{max}} =\sqrt{\frac{T/W}{\sqrt{kC_{D_0}}}-1}$  

Speed at which turn rate is maximum:  
$V_{\omega_{max}}=\Big( \frac{k}{C_{D_0}}\Big)^\frac14 \sqrt{\frac{2(W/S)}{\rho}}$  

## Pull-Up/Pull-Down Performance

### Pull-Up Maneuver

$R=\frac{V^2}{g(n-1)}$  
$\omega=\frac{g(n-1)}{V}$  

### Pull-Down Maneuver

$R=\frac{V^2}{g(n+1)}$  
$\omega=\frac{g(n+1)}{V}$  

---

### Corner/Maneuver Point

$V_{corner}=\sqrt{\frac{2n_{max}W} {\rho SC_{L_{max}}}}$  
*Note that the corner point is the intersection of the stall boundary and structural boundary.  
Thus, the maximum load factor is equal to the limit load factor and where *$C_L=C_{L_{max}}$*.*  

## Take-Off Performance

$V_{LO}=1.1V_{stall}$  
$V_2=1.2V_{stall}$  
*Note that *$V_2$* is also known as the safety speed (to clear a specified height).  
Specified height is 35ft for commercial aircraft and 50ft for military aircraft.*  

---

### Ground Run

Ground run is the total runway distance from standstill to liftoff.  

Newton’s second law for ground run:  
$F=\frac{W}{g}\cdot a =T-D-\mu_r(W-L)$  

General equation for ground run:  
$s_{ga}=\frac{W}{2g} \int^{V_g}_0 \frac{d({V_g}^2)} {T-D-\mu_r(W-L)}$  
*Note that *$V_g\ne V_{LO}$* if there is wind.*  

**Approach 1**  
Lift coefficient for ground run (if not given):  
$C_L=\frac{\mu_r}{2k}$  
*where *$\mu_r$* is the rolling resistance coefficient*  

Corrected profile drag (flap deflection):  
$C_{D_0}=\tilde C_{D_0} +\frac WSK_{uc}m^{-0.215}$  
*where *$K_{uc}=5.81\times10^{-5}$* for zero flap deflection (for takeoff) and   
*$K_{uc}=3.16\times10^{-5}$* for maximum flap deflection (for landing) and   
*$\tilde C_{D_0}$* is the uncorrected profile drag coefficient*  

Corrected total drag (ground effect):  
$C_D=C_{D_0}+\phi\tilde k{C_L}^2$  
$C_D=C_{D_0}+\Big[ \frac{(16h/b)^2}{1+(16h/b)^2} \Big]\tilde k{C_L}^2$  
*where *$\phi$* is the ground effect correction factor   
and *$\tilde k$* is the uncorrected Oswald efficiency factor*  

Ground run distance:  
$s_g=\frac1{2gK_A}ln\Big( 1+\frac{K_A{V_{LO}}^2}{K_T}\Big) +NV_{LO}$  
$K_A=-\frac{\rho}{2(W/S)} (C_D-\mu_rC_L)$  
$K_T=\frac TW-\mu_r$  
*Note that N is the time taken by the aircraft to rotate and liftoff.  
N=3 for commercial (large) aircraft and N=1 for military (small) aircraft.*  

**Approach 2**  
Effective ground speed of aircraft:  
$V_{eff}=\frac{V_{LO}}{\sqrt2} =0.707V_{LO}$  

Effective airspeed of aircraft if there is wind:  
$V_{eff} =V_{eff(airspeed)}-V_{hw}$  
$V_{eff} =V_{eff(airspeed)}+V_{tw}$  

Ground run distance:  
$s_g=\frac{W{V_{LO}}^2}{2g} \Big[\frac1{T-D-\mu_r(W-L)} \Big]_{V_{eff(airspeed)}}+NV_{LO}$  
*Note that thrust, drag, and lift are evaluated at the effective airspeed.*  

---

### Flare and Climb (Airborne Distance)

Flight path of flare and climb:  
$R=\frac{6.96{V_{stall}}^2}{g}$  
*Note that flare and climb is analyzed as a pull-up maneuver.*  

Speed during flare and climb:  
$V=1.15V_{stall}$  

Lift coefficient during flare and climb:  
$C_L=0.9C_{L_{max}}$  

Load factor during flare and climb:  
$n=1.19$  

Airborne distance:  
$s_a=\sqrt{2Rh_{ob}-{h_{ob}}^2}$  
*whereby *$h_{ob}$* is the specified height that the aircraft needs to clear*  

## Landing Performance

**Commercial Aircraft**  
$V_a=1.3V_{stall}$  
$V_f=1.225V_{stall}$  
$V_{TD}=1.15V_{stall}$  
**Military Aircraft**  
$V_a=1.2V_{stall}$  
$V_f=1.15V_{stall}$  
$V_{TD}=1.1V_{stall}$  

---

### Approach Distance

Approach angle:  
$\gamma_a=\frac{D-T}{W} =\frac1{L/D}-\frac TW$  

Distance covered during approach phase:  
$s_a=\frac{15.2-h_f}{tan\gamma_a}$  

---

### Flare Distance

$n=1.2$  
$R=\frac{{V_f}^2}{g(n-1)}$  
*where *$V_f$* is flare speed*  

Distance covered during flare phase:  
$s_f=Rsin\gamma_f$  

Height at which flare is executed:  
$h_f=R(1-cos\gamma_f)$  
*Note that *$\gamma_f=\gamma_a$*.*  

---

### Free Roll Distance

Speed is assumed to be constant and equal to $V_{TD}$.  
$s_{fr}=NV_{TD}$  

---

### Braked Roll Distance

Effective ground speed of aircraft:  
$V_{eff}=0.707V_{TD}$  

Braked roll distance:  
$s_{br}=\frac{W{V_{TD}}^2}{2g}\Big[ \frac1{T_{rev}+D+\mu_r(W-L)}\Big] _{V_{eff(airspeed)}}$  
*Note that reverse thrust, drag, and lift are evaluated at the effective airspeed.*  

## Range and Endurance

Power specific fuel consumption (SFC):  
$c=\frac{b}{P}$ *expressed in *$N/W/s$  
*where *$b$* is weight of fuel burnt per second*  

Thrust specific fuel consumption (TSFC):  
$c_t=\frac{b}{T}$ *expressed in *$N/N/s$  

For propeller aircraft, SFC is related to TSFC by:  
$c=\frac{c_t\eta_{pr}}{V}$  

Definitions of the different aircraft weights:  
- $W_0$ — gross weight of aircraft (full fuel, payload, and crew)
- $W_1$ — weight of aircraft with empty fuel tanks
- $W_f$ — instantaneous weight of fuel
- $W$ — instantaneous weight of aircraft

---

### Propeller Aircraft

**Maximum Range**  
Speed at which range is maximum:  
$V_{R_{max}}=V_{D_{min}} =\sqrt{\frac{2W}{\rho S} \sqrt{\frac{k}{C_{D_0}}}}$  

Maximum range of aircraft:  
$R_{max}=\frac{\eta_{pr}}{c} \frac1{2\sqrt{kC_{D_0}}} \ ln\frac{W_0}{W_1}$  
*Independent of altitude.*  
**Maximum Endurance**  
Speed at which endurance is maximum:  
$V_{E_{max}}=V_{P_{min}} =\sqrt{\frac{2W}{\rho S} \sqrt{\frac{k}{3C_{D_0}}}}$  

Maximum endurance of aircraft:  
$\frac{{C_L}^{3/2}}{C_D}_{max} =\frac14\Big( \frac3{k{C_{D_0}}^{1/3}} \Big)^{\frac34}$  
$E_{max}=\frac{\eta_{pr}}{c} \sqrt{2\rho S}\  \frac{{C_L}^{3/2}}{C_D}_{max} \Big(\frac1{\sqrt{W_1}} -\frac1{\sqrt{W_0}}\Big)$  
*Decreases with altitude.*  

---

### Jet Aircraft

**Maximum Range**  
Speed at which range is maximum:  
$V_{R_{max}} =V_{{\sqrt{C_L}/}{C_D}_{max}} =\sqrt{\frac{2W}{\rho S} \sqrt{\frac{3k}{C_{D_0}}}}$  
*Substitute *$W_0$* and *$W_1$* to obtain the flight speed with initial weight and final weight.*  

Maximum range of aircraft:  
$\frac{\sqrt{C_L}}{C_D}_{max} =\frac34\Big( \frac1{3k{C_{D_0}}^3}\Big) ^{\frac14}$  
$R_{max} =\frac2{c_t}\sqrt{\frac2{\rho S}} \frac{\sqrt{C_L}}{C_D}_{max} (\sqrt{W_0}-\sqrt{W_1})$  
*Increases with altitude.*  
**Maximum Endurance**  
Speed at which endurance is maximum:  
$V_{E_{max}}=V_{D_{min}} =\sqrt{\frac{2W}{\rho S} \sqrt{\frac{k}{C_{D_0}}}}$  

Maximum endurance of aircraft:  
$E_{max}= \frac1{2c_t\sqrt{kC_{D_0}}} \ ln\frac{W_0}{W_1}$  
*Independent of altitude.*  

## Energy Height Concept

Energy height of an aircraft:  
$H_e=h+\frac{V^2}{2g}$  

Specific excess power (SEP):  
$P_s =\frac{dh}{dt} +\frac{V}{g}\frac{dV}{at} =\frac{dH_e}{dt}$  
