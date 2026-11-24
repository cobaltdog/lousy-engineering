# MA3704 - Formulae

> MA3704 · AIRCRAFT ELECTRICAL DEVICES — exported from Lousy Engineering

---

## 3-Phase AC Systems

Impedance of an inductor,  
$\bar Z_L =0+jX_L =X_L\angle90\degree\ \Omega$  
*where *$X_L=\omega L=2\pi fL$  

Impedance of a capacitor,  
$\bar Z_C =0-jX_C =X_C\angle-90\degree\ \Omega$  
*where *$X_C =\frac1{\omega C} =\frac1{2\pi fC}$  
Power factor of a system,  
$PF=cos\varphi$  
*where *$\varphi$* is the power factor angle  
(angle difference between *$V$* and *$I$*)*  

Complex power of a system,  
$\bar S =\bar V_P{\bar I_P}^* =V_PI_P\angle\varphi$  

---

### Balanced Systems

|  | Y-Connection | $\Delta$-Connection |
| --- | --- | --- |
| Voltage | $V_L=\sqrt3V_P$ | $V_L=V_P$ |
| Current | $I_L=I_P$ | $I_L=\sqrt3I_P$ |

Conversion of impedance,  
$\bar Z_Y =\frac{1}{3}\bar Z_{\Delta}$  

**Y-Connection**  
Phase voltages,  
$\bar V_a=V\angle0\degree$  
$\bar V_b=V\angle-120\degree$  
$\bar V_c=V\angle120\degree$  

Line voltages,  
$\bar V_{ab} =\sqrt3V\angle30\degree$  
$\bar V_{bc} =\sqrt3V\angle-90\degree$  
$\bar V_{ca} =\sqrt3V\angle150\degree$  
$\Delta$**-Connection**  
Phase currents,  
$ \bar I_a=I\angle0\degree$  
$\bar I_b=I\angle-120\degree$  
$ \bar I_c=I\angle120\degree$  

Line currents,  
$\bar I_A =\sqrt3I\angle-30\degree$  
$\bar I_B =\sqrt3I\angle-150\degree$  
$\bar I_C =\sqrt3I\angle90\degree$  

**3-Phase Complex Power**  
Total complex power,  
$\bar S_T=3V_PI_P\angle\varphi$  
$\bar S_T=\sqrt3V_LI_L\angle\varphi$  
*Valid for both connections.*  

---

### Power Measurement

Power measured by a wattmeter,  
$P=|V|\times|I|\times|cos\varphi|$  
*where *$V$* is the line voltage across the wattmeter,   
and *$I$* is the line current through the wattmeter,   
and *$\varphi$* is the angle difference between *$\bar V$* and *$\bar I$  

Alternative equations for wattmeter,  
$P_1=V_LI_Lcos(30\degree-\varphi)$  
$P_2=V_LI_Lcos(30\degree+\varphi)$  
$P_T=\sqrt3V_LI_Lcos\varphi$  
$Q_T=\sqrt3(P_1-P_2)$  
$\varphi={tan^{-1}}\Big[ \frac{\sqrt3(P_1-P_2)}{P_1+P_2}\Big]$  

## Electromagnetism

### Magnetic Circuits

Magnetic flux (Weber),  
$\varphi=BA$  
*where *$A$* is the cross-section area*  

Magnetic flux density (Tesla),  
$B=\mu_0\mu_rH=\mu H$  
*where permeability of free space *$\mu_0=4\pi\times10^{-7}$*,  
and *$\mu_r$* is the relative permeability of a material,  
and *$H$* is the magnetic field intensity*  

Reluctance of a medium,  
$\mathfrak{R} =\frac{l}{\mu A}$  
*where *$l$* is the mean path length,  
and S.I. unit of reluctance is *$H^{-1}$  

Ohm’s law for magnetic circuits,  
$Ni =\varphi\mathfrak{R} =Hl$  
*where *$N$* is the number of turns of the coil*  

---

### Faraday’s Law

Flux linkage,  
$\lambda=N\varphi$  

Inductance of a coil (Henry),  
$L =\frac{\lambda}{i} =\frac{N\varphi}{i} =\frac{N^2}{\mathfrak{R}}$  

Magnetic field energy,  
$W_f =\frac12\varphi^2\mathfrak{R} =\frac12Ni\varphi =\frac12\lambda i =\frac12i^2L$  
*Expressed in *$J$*.*  
Magnetic field energy density,  
$w_f =\frac{B^2}{2\mu} =\frac12HB$  
*Expressed in *$J/m^3$*.*  

---

### Electromechanical Energy Conversion

**Constant Flux Condition**  
Force developed,  
$F_m=-\frac{dW_f}{dx}$  
$F_m =-\frac12\varphi^2\cdot \frac{d\mathfrak{R}(x)}{dx}$  
**Constant Current Condition**  
Force developed,  
$F_m=\frac{dW_f}{dx}$  
$F_m =\frac12i^2\cdot \frac{dL(x)}{dx}$  

## Transformers (AC)

Voltage induced in a coil,  
$E_{rms} =\frac{2\pi fN\phi_{max}}{\sqrt2} \approx4.44fN\phi_{max}$  
*where *$\phi$* is the magnetic flux passing through the coil*  

Turns ratio,  
$a =\frac{N_P}{N_S} =\frac{V_P}{V_S} =\frac{I_S}{I_P}$  
*where *$N_P$* is number of turns of the primary coil,   
and *$N_S$* is number of turns of the secondary coil*  

Impedance transformation,  
$Z_{P}=a^2Z_{S}$ *(Secondary referred to primary side)*  
$Z_S=\frac{Z_P}{a^2}$ *(Primary referred to secondary side)*  

---

### Real Transformer

**Open-Circuit Test**  
- High-voltage side is opened (no current flow)
- Only current flow through the core $R_C$ and $X_M$
- Values obtained correspond to the low-voltage side

Core resistance,  
$R_{C,LV} =\frac{{V_{OC}}^2}{P_{OC}}$  
Magnetizing reactance,  
$X_{M,LV} =\frac{V_{OC}}{I_{X_M}}$  
*where *$I_{OC} =\sqrt{{I_{R_C}}^2+{I_{X_M}}^2}$  

**Short-Circuit Test**  
- Low-voltage side is short-circuit
- Only current flow through the coils $Z_{P}$ and $Z_S$
- Values obtained correspond to the high-voltage side

Equivalent resistance of the coils,  
$R_{eq,HV} =\frac{P_{SC}}{{I_{SC}}^2}$  
Equivalent reactance of the coils,  
$X_{eq,HV} =\sqrt{{Z_{eq}}^2-{R_{eq}}^2}$  

---

### Voltage Regulation

Voltage regulation,  
$\text{VR} =\frac{V_{S,nl}-V_{S,fl}}{V_{S,fl}}$  
*where *$\bar V_{S,nl} =\frac{\bar V_P}{a} =\bar V_S+\bar I_S\bar Z_{eq,S}$  

Output power,  
$P_{out} =V_SI_Scos\theta$  
*where power factor *$PF=cos\theta$  

Transformer efficiency,  
$\eta =\frac{P_{out}}{P_{in}} =\frac{P_{out}} {P_{out}+P_{Cu}+P_{core}}$  
*where *$P_{Cu}$* and *$P_{core}$* are power losses*  
Copper loss due to resistance of coils,  
$P_{Cu} ={I_S}^2R_{eq,S}$  
*Equivalent resistance of the coils when reflected (referred) to secondary side.*  

Core loss due to electromagnetism,  
$P_{core} =\frac{(V_{S,nl})^2}{R_{C,S}}$  
*Resistance of the core when reflected (referred) to secondary side.*  

## Induction Motors (AC)

### Rotating Magnetic Field

Synchronous speed,  
$n_{sync} =\frac{120f_s}{p}$  
*where *$f_s$* is the frequency of the 3-phase supply in Hz,   
and *$p$* is the number of poles formed by stator winding*  

Rotor slip,  
$s =\frac{n_{slip}}{n_{sync}} =\frac{n_{sync}-n_{mech}}{n_{sync}} =\frac{\omega_{sync}-\omega_{mech}}{\omega_{sync}}$  
*If *$s=0$*, rotor is turning at synchronous speed (no slip).  
If *$s=1$*, rotor is stationary.*  

Rotor electrical frequency,  
$f_r =sf_s =\frac{p}{120} (n_{sync}-n_{mech})$  

---

### Power and Torque

Power relations,  
$P_{AG} =P_{in}-P_{SCL} =3V_\phi I_1cos\theta -3{I_1}^2R_1 =3{I_2}^2\frac{R_2}{s}$  
$P_{conv} =P_{AG}-P_{RCL} =3{I_2}^2\frac{R_2}{s} -3{I_2}^2R_2 =(1-s)P_{AG}$  
$P_{out}=P_{conv}-P_{rot}$  

Thevenin’s voltage,  
$\bar V_{TH} =\bar I(jX_m)$  
$\bar V_{TH} =\Big[\frac{\bar V_\phi} {R_1+j(X_1+X_M)}\Big]jX_M$  
$\bar V_{TH} =\frac{(\bar V_\phi)(jX_M)} {R_1+j(X_1+X_M)}$  
image.png  

Thevenin’s impedance,  
$\frac1{\bar Z_{TH}} =\frac1{R_1+jX_1} +\frac1{jX_M}$  
$\frac1{\bar Z_{TH}} =\frac{R_1+j(X_1+X_M)} {jX_M(R_1+jX_1)}$  
$\bar Z_{TH} =\frac{jX_M(R_1+jX_1)}{R_1+j(X_1+X_M)}$  
image.png  

Rotor current,  
$\bar I_2 =\frac{\bar V_{TH}} {\bar Z_{TH}+jX_2+R_2/s}$  
$\bar I_2 =\frac{\bar V_{TH}} {(R_{TH}+R_2/s) +j(X_{TH}+X_2)}$  
image.png  

Developed torque,  
$T_{dev} =\frac{P_{conv}}{\omega_{mech}} =\frac{(1-s)P_{AG}} {(1-s)\omega_{sync}} =\frac{P_{AG}}{\omega_{sync}} =\frac{3{I_2}^2}{\omega_{sync}} \frac{R_2}{s}$  
*Maximum (pullout) torque is achieved when air-gap power is maximum.*  

For power consumed by $\frac{R_2}{s}$ to be maximum,  
$\frac{R_2}{s} =|R_{TH}+j(X_{TH}+X_2)|$  
$\frac{R_2}{s} =\sqrt{{R_{TH}}^2+(X_{TH}+X_2)^2}$  

---

### Parameters of Equivalent Circuit

**DC Test**  
- Determine stator resistance $R_1$
- DC voltage is applied to stator windings of the motor
- No induced voltage in the rotor as the current is DC
- Reactance of motor is therefore zero at direct current

Stator resistance,  
$R_1 =\frac12\Big( \frac{V_{DC}}{I_{DC}}\Big)$  

**Locked-Rotor Test**  
- Determine rotor resistance $R_2$, and stator and rotor impedances $X_1$ and $X_2$
- Rotor is locked/blocked such that it cannot turn, thus rotor slip $s=1$
- $jX_M\gg R_2+jX_2$ such that no current flows through $jX_M$

Rotor resistance,  
$P_{in}={3I_1}^2(R_1+R_2)$  
Stator and rotor impedances,  
$\frac{V_\phi}{I_1} =Z_{LR} =\sqrt{(R_1+R_2)^2+(X_1+X_2)^2}$  
*Note that stator and rotor reactances are equal.*  

**No Load Test**  
- Motor is allowed to spin freely — input power only used to overcome losses
- At no load, rotor speed $n_{mech}\approx n_{sync}$ such that rotor slip $s\approx0$
- $\frac{R_2}{s}$ will be very high such that no current flows through rotor
- Rotor copper losses is zero as rotor current $I_2$ is negligible

Magnetizing reactance,  
$\frac{V_\phi}{I_1} =Z_{nl} =\sqrt{{R_1}^2+(X_1+X_M)^2}$  
Rotational losses,  
$P_{rot}=P_{in}-P_{SCL}$  
$P_{rot} =3V_\phi I_1cos\theta -3{I_1}^2R_1$  

## Motors and Generators (DC)

Induced torque in a rotating loop,  
$T_{ind} =\frac2\pi\phi I_A$  
Voltage induced in a rotating loop,  
$e_{ind} =\frac2\pi\phi\omega_{mech}$  

---

### DC Motor

Speed regulation,  
$\text{SR} =\frac{n_{mech,nl}-n_{mech,fl}} {n_{mech,fl}}$  
Terminal voltage,  
$V_T=E_A+I_AR_A$  

image.png  
image.png  

#### Power Relations

Input power,  
$P_{in}=V_TI_L+V_FI_F$ *(separately excited)*  
$P_{in}=V_TI_L$ *(shunt)*  

Copper losses,  
$P_{CL} ={I_F}^2R_F +{I_A}^2R_A$  

Converted/developed power,  
$P_{conv} =P_{in}-P_{CL} =E_AI_A$  
$P_{conv}=T_{dev}\omega_{mech}$  

Output power,  
$P_{out}=P_{conv}-P_{rot}$  
$P_{out}=T_{load}\omega_{mech}$  
image.png  

#### Parameters of Equivalent Circuit

**Locked-Rotor Test**  
- Armature is locked such that it does not rotate, $\omega_{mech}=0$ and $E_A=0$
- Separate DC power sources supply $V_F$ and $V_T$ to the respective circuits
- Currents $I_F$ and $I_A$ are adjusted to corresponding rated currents
- Field and armature resistance are then measured

Field resistance,  
$R_F=\frac{V_F}{I_F}$  
Armature resistance,  
$R_A=\frac{V_A}{I_A}$  

**No Load Test**  
- Motor is allowed to run freely with no mechanical load attached to it
- Converted power is only used to overcome rotational losses

Rotational losses,  
$P_{rot}=P_{conv,nl}=E_AI_A$  

---

### DC Generator

Voltage regulation,  
$\text{VR} =\frac{V_{nl}-V_{fl}}{V_{fl}}$  
Terminal voltage,  
$V_T=E_A-I_AR_A$  

image.png  
image.png  

#### Power Relations

Input power (separately excited),  
$P_{in} =T_{in}\omega_{mech} +V_FI_F$  
*where *$T_{in}$* is torque of the prime mover*  

Input power (shunt),  
$P_{in} =T_{in}\omega_{mech}$  
*where *$T_{in}$* is torque of the prime mover*  

Converted/developed power of a generator,  
$P_{conv} =P_{in}-P_{rot} =E_AI_A$  
$P_{conv} =T_{dev}\omega_{mech}$  

Output power (separately excited),  
$P_{out} =P_{conv}-{I_A}^2R_A =V_TI_L$  

Output power (shunt),  
$P_{out} =P_{conv} -{I_F}^2R_F-{I_A}^2R_A =V_TI_L$  
