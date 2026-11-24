# MA3702 - Formulae

> MA3702 · AIRCRAFT PROPULSION — exported from Lousy Engineering

---

## Engine Performance

Stagnation (total) temperature,  
$ T_0=T+\frac{U^2}{2c_p}$  
*where *$T_0$* is the total temperature,   
and *$T$* is the static temperature*  

General thrust equation,  
$T =\dot m_a\big[(1+f)U_e-U_a\big] +(P_e-P_a)A_e$  
*where fuel-air ratio *$f=\frac{\dot m_f}{\dot m_a}$  

Simplified thrust equation,  
$T\approx\dot m_a(U_e-U_a)$  
*Assuming *$f\ll1$* and *$P_e=P_a$*.*  

**Thermal Efficiency**  
General equation,  
$\eta_{th} =\frac{\Delta KE_{propellent}} {\dot Q_{fuel}} =\frac{\frac12\dot m_a\big[ (1+f){U_e}^2-{U_a}^2\big]} {\dot m_fQ_R}$  
*where *$Q_R$* is the calorific value of the fuel*  

Based on simplified thrust,  
$\eta_{th}\approx \frac{{U_e}^2-{U_a}^2}{2fQ_R}$  
*Valid only for *$f\ll1$* and *$P_e=P_a$*.*  
**Propulsion Efficiency**  
General equation,  
$\eta_{p} =\frac{Thrust\ Power} {\Delta KE_{propellent}} =\frac{TU_a} {\frac12\dot m_a \big[(1+f){U_e}^2-{U_a}^2\big]}$  
*For a single propellent stream.*  

Based on simplified thrust,  
$\eta_p \approx\frac{2U_a}{U_e+U_a} =\frac{2}{1+U_e/U_a}$  
*Valid only for *$f\ll1$* and *$P_e=P_a$*.*  

**Overall Efficiency**  
General equation,  
$\eta_o =\frac{Thrust\ Power}{Fuel\ Power} =\frac{TU_a}{\dot m_fQ_R} =\eta_{p}\times\eta_{th}$  

Based on simplified thrust,  
$\eta_o\approx \frac{(U_e-U_a)U_a}{fQ_R}$  
**Unused Kinetic Energy**  
$Unused\ KE =\frac12\dot m_a(u_e-u_a)^2$  
*Valid only for *$f\ll1$* and *$P_e=P_a$*.*  

**Specific Thrust**  
$T_s=\frac{T}{\dot m_a}$  
**Thrust Specific Fuel Consumption**  
$TSFC =\frac{\dot m_f}{T} =\frac{U_a}{\eta_oQ_R}$  

## Turbojet Cycle

| Station |  |
| --- | --- |
| $a\rightarrow1$ | Freestream air |
| $1\rightarrow2$ | Diffuser |
| $2\rightarrow3$ | Compressor |
| $3\rightarrow4$ | Combustor |
| $4\rightarrow5$ | Turbine |
| $5\rightarrow6$ | Afterburner (if applicable) |
| $6\rightarrow7$ | Exhaust nozzle |

image.png  

### Diffuser $(a\rightarrow2)$

Temperature ratio,  
$\frac{T_2}{T_a} =1+\frac{{U_a}^2}{2c_{p_a}T_a}$  
$\frac{T_{2s}}{T_a} =1+\eta_i \frac{{U_a}^2}{2c_{p_a}T_a} =1+\eta_i \frac{\gamma-1}{2}{M_a}^2$  
*where *$\eta_i$* is the inlet isentropic efficiency*  

Pressure ratio,  
$\frac{P_2}{P_a} =\frac{P_{2s}}{P_a} =\Big(\frac{T_{2s}}{T_a}\Big) ^{\frac{\gamma}{\gamma-1}}$  
$\frac{P_2}{P_a} =\Big(1+\eta_i \frac{{U_a}^2}{2c_{p_a}T_a}\Big) ^{\frac{\gamma}{\gamma-1}} =\Big(1+\eta_i \frac{\gamma-1}{2}{M_a}^2\Big) ^{\frac{\gamma}{\gamma-1}}$  
*where *$\eta_i$* is the inlet isentropic efficiency*  

### Compressor $(2\rightarrow3)$

Temperature ratio,  
$\frac{T_3}{T_2} =1+\frac1{\eta_c}\Big[ \Big(\frac{P_3}{P_2}\Big) ^{\frac{\gamma-1}{\gamma}}-1\Big]$  
$\frac{T_{3s}}{T_2} =1 +\eta_c\Big(\frac{T_3}{T_2}-1\Big)$  
*where *$\eta_c$* is the compressor isentropic efficiency*  

Pressure ratio,  
$\frac{P_3}{P_2} =\Big[1+\eta_c\Big( \frac{T_3}{T_2}-1\Big)\Big] ^{\frac{\gamma}{\gamma-1}}$  
*where *$\eta_c$* is the compressor isentropic efficiency*  

**Polytropic Compression Process**  
$\frac{P_3}{P_2} =\Big(\frac{T_3}{T_2}\Big) ^{\frac{n}{n-1}}$  
$\eta_{c,poly} =\frac{n}{n-1}\cdot \frac{\gamma-1}{\gamma}$  
**Compressor Work**  
Mechanical work input to compressor,  
$\dot W_{m,c} =\frac{\dot m_ac_{p_a}(T_3-T_2)} {\eta_{m,c}}$  
*where *$\eta_{m,c}$* is the mechanical efficiency*  

### Combustor $(3\rightarrow4)$

Heat addition into combustor,  
$Q_{in} =(\dot m_a+\dot m_f) c_{p_g}T_4 -\dot m_ac_{p_a}T_3$  

Combustion efficiency,  
$\eta_b =\frac{\Delta\dot H}{\dot Q_{fuel}} =\frac{(\dot m_a+\dot m_f) c_{p_g}T_4 -\dot m_ac_{p_a}T_3}{\dot m_fQ_R}$  

### Turbine $(4\rightarrow5)$

Temperature ratio,  
$\frac{T_5}{T_4} =1-\eta_t\Big[1-\Big( \frac{P_5}{P_4}\Big) ^{\frac{\gamma-1}{\gamma}}\Big]$  
$\frac{T_{5s}}{T_4} =1-\frac1{\eta_t}\Big( 1-\frac{T_5}{T_4}\Big)$  
*where *$\eta_t$* is the turbine isentropic efficiency*  

Pressure ratio,  
$\frac{P_5}{P_4} =\Big[1-\frac1{\eta_t}\Big( 1-\frac{T_5}{T_4}\Big)\Big] ^{\frac{\gamma}{\gamma-1}}$  
*where *$\eta_t$* is the turbine isentropic efficiency*  

**Polytropic Expansion Process**  
$\frac{P_5}{P_4} =\Big(\frac{T_5}{T_4}\Big) ^{\frac{n}{n-1}}$  
$\eta_{t,poly} =\frac{n-1}{n}\cdot \frac{\gamma}{\gamma-1}$  

**Compressor-Turbine Work**  
Mechanical work output of turbine,  
$\dot W_{m,t} =\Big[(\dot m_a+\dot m_f) c_{p_g}(T_4-T_5)\Big] \eta_{m,t}$  
*where *$\eta_{m,t}$* is the mechanical efficiency*  

Accounting for transmission efficiency,  
$\dot W_{in}=\dot W_{out}$  
$\dot W_{m,c}=\dot W_{m,t}$  
$\frac{\dot m_ac_{p_a}(T_3-T_2)} {\eta_{m,c}} =\eta_{trans} \Big[(\dot m_a+\dot m_f) c_{p_g}(T_4-T_5)\Big] \eta_{m,t}$  
*where *$\eta_{trans}$* is the transmission efficiency of the engine spool*  

### Exhaust Nozzle $(5\rightarrow7)$

Temperature ratio,  
$\frac{T_7}{T_5} =1-\eta_n\Big[1- \Big(\frac{P_7}{P_5}\Big) ^{\frac{\gamma-1}{\gamma}}\Big]$  
$\frac{T_{7s}}{T_5} =1-\frac1{\eta_n} \Big(1-\frac{T_7}{T_5}\Big)$  
*where *$\eta_n$* is the nozzle isentropic efficiency*  

Pressure ratio,  
$\frac{P_7}{P_5} =\Big[1-\frac1{\eta_n}\Big( 1-\frac{T_7}{T_5}\Big)\Big] ^{\frac{\gamma}{\gamma-1}} =\Big[1-\frac1{\eta_n}\Big( 1-\frac1 {1+\frac{\gamma-1}{2}{M_7}^2} \Big)\Big] ^{\frac{\gamma}{\gamma-1}}$  
*where *$\eta_n$* is the nozzle isentropic efficiency*  

**Choked or Unchoked Condition**  
Critical pressure of nozzle,  
$\frac{P_{cr}}{P_5} =\Big(1-\frac1{\eta_n} \frac{\gamma-1}{\gamma+1}\Big) ^{\frac{\gamma}{\gamma-1}}$  
*If *$P_{cr}>P_a$* nozzle is choked.  
If *$P_{cr}<P_a$* nozzle is unchoked.*  
**Nozzle Exit Velocity**  
$ U_7=\sqrt{2c_{p_g}(T_5-T_7)}$  
$U_7 =\sqrt{2c_{p_g}\eta_nT_5 \Bigg[1- \Big(\frac{P_7}{P_5}\Big) ^{\frac{\gamma-1}{\gamma}}\Bigg]}$  
$ U_7 =\sqrt{2\eta_n \frac{\gamma}{\gamma-1}R_gT_5 \Bigg[1-\Big(\frac{P_7}{P_5}\Big) ^{\frac{\gamma-1}{\gamma}}\Bigg]}$  

Expressing as Mach number,  
$M_7 =\sqrt{\frac{2}{\gamma-1} \Big(\frac{T_5}{T_7}-1\Big)}$  

## Turbofan Cycle

Bypass ratio,  
$B=\frac{\dot m_B}{\dot m_a}$  
*where *$\dot m_B$* is the bypass flow, and *$\dot m_a$* is the core flow*  

### Separate Exhaust

| Station |  |
| --- | --- |
| $a\rightarrow1$ | Freestream air |
| $1\rightarrow2$ | Diffuser |
| $2\rightarrow8$ | Fan |
| $8\rightarrow3$ | Compressor |
| $8\rightarrow\text{ef}$ | Fan nozzle |
| $3\rightarrow4$ | Combustor |
| $4\rightarrow5$ | Turbine |
| $5\rightarrow7$ | Core nozzle |

image.png  

**Fan-Compressor-Turbine Work**  
$\dot W_{f}+\dot W_c=\dot W_t$  
$\dot W_{bypass} +\dot W_{core} =\dot W_t$  
$B\dot m_ac_{p_a}(T_8-T_2) +\dot m_ac_{p_a}(T_3-T_2) =(\dot m_a+\dot m_f)c_{p_g} (T_4-T_5)$  
$Bc_{p_a}(T_8-T_2) +c_{p_a}(T_3-T_2) =(1+f)c_{p_g}(T_4-T_5)$  

**Thrust Equation**  
General equation,  
$T =\big(\sum_{out}\ \dot mU -\sum_{in}\ \dot mU\big) +\sum\ Pressure\ Thrust$  
$T =\Big[\dot m_a(1+f)U_e +B\dot m_aU_{ef} -(1+B)\dot m_aU_a\Big]\\ \ \ \ \ \ \ \ \ \  +\Big[(P_e-P_a)A_e +(P_{ef}-P_a)A_{ef}\Big]$  

Assuming exhaust expands to ambient pressure,  
$T =\dot m_a(1+f)U_e +B\dot m_aU_{ef} -(1+B)\dot m_aU_a$  

**Engine Performance**  
Specific thrust (based on core flow),  
$\frac{T}{\dot m_a} =(1+f)U_e+BU_{ef}-(1+B)U_a$  

Specific thrust (based on total flow),  
$\frac{T}{(1+B)\dot m_a} =\frac{(1+f)U_e+BU_{ef}}{1+B}-U_a$  

Thrust specific fuel consumption,  
$TSFC =\frac{\dot m_f}{T} =\frac{\dot m_f}{\dot m_a} \cdot\frac{\dot m_a}{T} =\frac{f} {(1+f)U_e+BU_{ef}-(1+B)U_a}$  

### Mixed Exhaust

| Station |  |
| --- | --- |
| $a\rightarrow1$ | Freestream air |
| $1\rightarrow2$ | Diffuser |
| $2\rightarrow8$ | Fan |
| $8\rightarrow3$ | Compressor |
| $8\rightarrow\text{mix}$ | Mixing chamber |
| $3\rightarrow4$ | Combustor |
| $4\rightarrow5$ | Turbine |
| $5\rightarrow7$ | Core nozzle |

image.png  

**Mixing Temperature**  
Energy balance of mixing chamber,  
$\dot E_{in}=\dot E_{out}$  
$\dot E_{bypass}+\dot E_{core} =\dot E_{mix}$  
$B\dot m_ac_{p_a}T_8 +(\dot m_a+\dot m_f)c_{p_g}T_5 =(\dot m_a+\dot m_f+\dot m_B) c_{p_{mix}}T_{mix}$  
$Bc_{p_a}T_8 +(1+f)c_{p_g}T_5 =(1+f+B)c_{p_{mix}}T_{mix}$  
$T_{mix} =\frac{BT_8+(1+f)T_5}{1+f+B}$  
*Assuming specific heats to be constant.*  

**Thrust Equation**  
General equation,  
$T =\big(\sum_{out}\ \dot mU -\sum_{in}\ \dot mU\big) +\sum\ Pressure\ Thrust$  
$T =\Big[\dot m_a(1+f+B)U_e -(1+B)\dot m_aU_a\Big] +(P_e-P_a)A_e$  

Assuming exhaust expands to ambient pressure,  
$T =\dot m_a(1+f+B)U_e -(1+B)\dot m_aU_a$  

**Engine Performance**  
Specific thrust (based on core flow),  
$\frac{T}{\dot m_a} =(1+f+B)U_e-(1+B)U_a$  

Specific thrust (based on total flow),  
$\frac{T}{(1+B)\dot m_a} =\frac{(1+f+B)U_e}{1+B}-U_a$  

Thrust specific fuel consumption,  
$TSFC =\frac{\dot m_f}{T} =\frac{\dot m_f}{\dot m_a} \cdot\frac{\dot m_a}{T} =\frac{f}{(1+f+B)U_e-(1+B)U_a}$  

### Aft Mounted

| Station |  |
| --- | --- |
| $a\rightarrow1$ | Freestream air |
| $1\rightarrow2$ | Diffuser |
| $2\rightarrow3$ | Compressor |
| $3\rightarrow4$ | Combustor |
| $4\rightarrow5$ | Turbine |
| $5\rightarrow6$ | Fan turbine |
| $6\rightarrow7$ | Core nozzle |
| $2\rightarrow8$ | Fan |
| $8\rightarrow\text{ef}$ | Fan nozzle |

image.png  

**Fan-Fan Turbine Work**  
$\dot W_f=\dot W_{ft}$  
$B\dot m_ac_{p_a}(T_8-T_2) =(\dot m_a+\dot m_f)c_{p_g} (T_5-T_6)$  
$Bc_{p_a}(T_8-T_2) =(1+f)c_{p_g}(T_5-T_6)$  

## Axial Compressors

Static temperature and pressure,  
$\frac{P_{0,1}}{P_1} =\Big(\frac{T_{0,1}}{T_1}\Big) ^{\frac{\gamma}{\gamma-1}}$ *(isentropic relations)*  
$T_{0,1}=T_1+\frac{{C_1}^2}{2c_p}$ *(stagnation concept)*  

Euler’s equations,  
$\dot W=\dot m\Delta h$  
$\dot W_{comp}=\dot m (U_2C_{\theta,2} -U_1C_{\theta,1})$  
$\dot W_{turb}=\dot m (U_1C_{\theta,1} -U_2C_{\theta,2})$  

For a normal stage, the following applies,  
- $U=r\omega$ *(rotor speed is constant based on mean radius)*
- $C_z=const.$ *(axial velocity of flow is constant throughout)*
- $C_1=C_3$ *(rotor inlet absolute velocity = stator outlet absolute velocity)*
- $\alpha_1=\alpha_3$ *(rotor inlet flow absolute angle = stator outlet flow absolute angle)*

Relation between velocities,  
$\vec C=\vec U+\vec w$  
$\vec U =\vec C_\theta +\vec w_\theta$  

---

### Total Enthalpy Change

Total enthalpy change across compressor stage,  
$\frac{\dot W}{\dot m} =h_{0,3}-h_{0,1} =c_p(T_{0,3}-T_{0,1})$  

Total enthalpy change across compressor stage,  
$\frac{\dot W}{\dot m}=UC_z (tan\alpha_2-tan\alpha_1)$  
$\frac{\dot W}{\dot m} =U(U-C_ztan\beta_2 -C_ztan\alpha_1)$  
$\frac{\dot W}{\dot m} =UC_z(tan\beta_1-tan\beta_2)$  

$\alpha_1$* → Rotor inlet flow absolute angle  
*$\beta_1$* → Rotor inlet flow relative angle  
*$\alpha_2$* → Rotor outlet flow absolute angle  
*$\beta_2$* → Rotor outlet flow relative angle*  
*Angles are measured from the axial axis.*  

---

### Stage Pressure Rise

Total pressure ratio across compressor stage,  
$r_{stage} =\frac{P_{0,3}}{P_{0,1}} =\Big(1+\eta_{st} \frac{\Delta T_{0_{stage}}}{T_{0,1}}\Big) ^{\frac{\gamma}{\gamma-1}}$  
$r_{stage} =\frac{P_{0,3}}{P_{0,1}} =\Big(1+\eta_{st} \frac{U\Delta C_{\theta}}{c_pT_{0,1}}\Big) ^{\frac{\gamma}{\gamma-1}}$  

---

### Degree of Reaction

Degree of reaction (general equation),  
$ R =\frac{\Delta h_{rotor}} {\Delta h_{stage}} =\frac{\Delta h_{rotor}} {\Delta h_{rotor} +\Delta h_{stator}}$  

Degree of reaction (isentropic & incompressible flow),  
$R =\frac{\Delta P_{rotor}} {\Delta P_{stator}}$  

Equation in terms of the different velocities,  
$R =\frac{\Delta h_{rotor}} {\Delta h_{stage}} =\frac{h_2-h_1}{h_3-h_1} =\frac{{w_1}^2-{w_2}^2}{2U (C_{\theta,2}-C_{\theta,1})}$  
$R =\frac{w_{\theta,1} +w_{\theta,2}}{2U}$ *(if *$C_z$* and *$U$* are constant)*  

Equation in terms of the different flow angles,  
$R =\frac12\phi (tan\beta_1+tan\beta_2)$  
$R=1-\frac12\phi (tan\alpha_1+tan\alpha_2)$  
$R =\frac12\big[1-\phi (tan\alpha_1-tan\beta_2)\big]$  
*where flow coefficient *$\phi=\frac{C_z}{U}$  

---

### Non-Dimensional Parameters

Stage loading coefficient,  
$\psi =\frac{\Delta h_{0_{stage}}}{U^2} =\frac{c_p\Delta T_{0_{stage}}}{U^2}$  

Coefficient of total pressure,  
$\delta =\frac{P_0}{P_{ref}} =\frac{P_0}{101325}$  

Coefficient of rotor speed,  
$\frac{N_1}{\sqrt{\theta_1}} =\frac{N_{1'}}{\sqrt{\theta_{1'}}}$  
Coefficient of total temperature,  
$\theta =\frac{T_0}{T_{ref}} =\frac{T_0}{288}$  

Coefficient of mass flow rate,  
$\frac{\dot m_1 \sqrt{\theta_1}} {\delta_1} =\frac{\dot m_{1'} \sqrt{\theta_{1'}}}{\delta_{1'}}$  
*where subscript 1 represents the designed value,  
and subscript 1’ represents the actual value*  

## Chemical Reactions

Chemical composition of dry air,  
$1\ kmol\ O_2 +3.76\ kmol\ N_2 =4.76\ kmol\ Air$  

Heat of reaction,  
$Q =H_{products}-H_{reactants}$  
$Q_{HOR} =\sum N(\bar h_{f}^\degree)_p -\sum N(\bar h_{f}^\degree)_r$  
$Q_{HOR} =\sum m_i(\bar h_{f,i}^\degree)_p -\sum m_i(\bar h_{f,i}^\degree)_r$  
*where *$\bar h_f^\degree$* is the enthalpy of formation at the reference state*  

Heating value of a fuel,  
$q_{HV}=-\frac{Q_{HOR}}{M_{fuel}}$  
*where *$M_{fuel}$* is the molar mass of the fuel*  

Adiabatic flame temperature,  
$0=H_{products}-H_{reactants}$  
$0 =\sum N(\bar h_{f}^\degree +\bar h-\bar h^\degree)_p -\sum N(\bar h_{f}^\degree +\bar h-\bar h^\degree)_r$  
$0 =\Big[ \sum N(\bar h_{f}^\degree)_p -\sum N(\bar h_{f}^\degree)_r \Big] +\sum N (\bar h-\bar h^\degree)_p$  
$0 =Q_{HOR} +\sum N (\bar h_{ad}-\bar h^\degree)_p$  
$\sum N (\bar h_{ad}-\bar h^\degree)_p =-Q_{HOR}$  
$\sum Nc_p(T_{ad}-T_{ref})_p =-Q_{HOR}$  

Equivalence ratio,  
$\phi =\frac{f}{f_{st}} =\frac{m_f/m_o}{(m_f/m_o)_{st}} =\frac{N_f/N_o}{(N_f/N_o)_{st}} =\frac{N_fN_{o,st}}{N_{f,st}N_o}$  
*where *$f_{st}$* is the stoichiometric ratio*  
