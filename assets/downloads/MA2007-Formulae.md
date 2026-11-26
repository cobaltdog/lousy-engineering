# MA2007 - Formulae

> MA2007 · THERMODYNAMICS — exported from Lousy Engineering

---

## Properties of Pure Substances

### Property Tables

**Saturated Liquid-Vapor Mixture**  
$x=\frac{m_{vapor}}{m_{total}}$ *where *$x$* is the quality or dryness factor*  

$v_{avg}=v_f+xv_{fg}$  
$u_{avg}=u_f+xu_{fg}$  
$h_{avg}=h_f+xh_{fg}$  
*where *$i_{fg}$* denotes the difference *$i_g-i_f$  

**Superheated Vapor and Compressed Liquid**  
For a given temperature, if $P<P_{sat}$, substance is in the superheated vapor phase.  
For a given pressure, if $T>T_{sat}$, substance is in the superheated vapor phase.  

For a given temperature, if $P>P_{sat}$, substance is in the compressed liquid phase.  
For a given pressure, if $T<T_{sat}$, substance is in the subcooled region.  

**Enthalpy — A Combination Property**  
$h=u+Pv$ *expressed in *$kJ/kg$  
$H=U+P\sout V$ *expressed in *$kJ$  

---

### Ideal-Gas Equation of State

$n=\frac{m}{M}$ *where *$M$* is molar mass in *$kg/kmol$  
$P\sout V=nR_uT$ *where *$R_u=8.31447\ kJ/kmol\cdot K$  
$P\sout V=mR_sT$ *where *$R_s=\frac{R_u}{M}$* expressed in *$kJ/kg\cdot K$  
$Pv=R_sT$ *where *$v$* is specific volume expressed in *$m^3/kg$  

**Compressibility Factor**  
$Pv=ZR_sT$ *where *$Z=1$* for an ideal gas*  

Reduced pressure:     $P_R=\frac{P}{P_{cr}}$  
Reduced temperature:     $T_R=\frac{T}{T_{cr}}$  
Reduced specific volume:     $v_R=\frac{v}{\frac{R_sT_{cr}}{P_{cr}}}$  
A gas is an ideal gas if $P_R<0.01$ or $T_R>2$.  

## General Energy Analysis

### First Law of Thermodynamics

Energy change is the difference between initial state and final state.  
$\Delta E_{sys}=E_{in}-E_{out}$  
$\Delta E_{sys}=E_f-E_i$  

Total energy change can be expressed in the different forms of energy.  
$\Delta E_{sys}=\Delta U+\Delta KE+\Delta PE$  
$\Delta E_{sys}=(U_2-U_1)+\frac12m({V_2}^2-{V_1}^2)+mg(z_2-z_1)$  
*The above equation represents the LHS of the first law of thermodynamics.*  

Similarly, total energy change can be expressed in heat, work, and mass flow.  
$\Delta E_{sys}=(Q_{in}-Q_{out})+(W_{in}-W_{out})+(E_{m_{in}}-E_{m_{out}})$  
$ \Delta E_{sys}=Q-W+\Delta E_{m}$  
*The above equation represents the RHS of the first law of thermodynamics.*  

## Analysis of Closed Systems

### Energy Balance for Closed Systems

A closed system has no mass flow across its boundaries.  
$\Delta E_{sys}=Q-W$  

If the system is stationary, there is negligible change in kinetic and potential energies.  
$\Delta U=Q-W$  
$\Delta u=q-w$  

**Moving Boundary Work**  
Isochoric (constant volume) process:     $W_b=\int^2_1\ P\ d\sout V=0$  
Isobaric (constant pressure) process:     $W_b =\int^2_1\ P\ dV =P(\sout V_2-\sout V_1)$  
Isothermal (constant temperature) process:     $W_b=mR_sT\  ln\frac{\sout V_2}{\sout V_1} =mR_sT\ ln\frac{P_1}{P_2}$  

Polytropic process satisfies the relationship $P\sout V^n=Const$  
$W_b=\frac{P_2\sout V_2 -P_1\sout V_1}{1-n} =\frac{mR_s(T_2-T_1)}{1-n}$  

---

### $U$, $H$, and Specific Heats (Ideal Gases)

For an ideal gas, $u$ and $h$ are functions of temperature only.  
$\Delta u=c_{v,avg}\Delta T$  
$\Delta h=c_{p,avg}\Delta T$  

**Specific Heats Relations**  
$h=u+Pv$  
$h=u+R_sT$  
$c_p=c_v+R_s$  
$k=\frac{c_p}{c_v}$ is the specific heat ratio  

---

### $U$, $H$, and Specific Heats (Solids and Liquids)

$c_p=c_v=c$  
$\Delta u=c_{avg}\Delta T$  
$\Delta h=c_{avg}\Delta T+v\ \Delta P$  

For solids, $v\ \Delta P$ is insignificant:     $\Delta h=c_{avg}\Delta T$  
For liquids (isobaric process — heaters):     $\Delta h=c_{avg}\Delta T$  
For liquids (isothermal process — pumps):     $\Delta h=v\ \Delta P$  

## Analysis of Control Volumes

### Conservation of Mass Principle

$m_{in}-m_{out}=\Delta m_{CV}$  
$\dot m_{in}-\dot m_{out}=\frac{dm_{CV}}{dt}$  

**Mass and Volume Flow Rates**  
$\dot m=\rho\dot V=\rho AV$ *where *$V$* represents velocity*  
$\dot m=\rho\dot V=\frac{\dot V}{v}$ *where *$V$* represents volume*  

### Energy of a Flowing Fluid

Flow work is the energy required to push mass into and out of a control volume.  
$W_{flow}=Force\times Distance$  
$W_{flow}=Pressure\times Area\times Distance$  
$W_{flow}=Pressure\times Volume$  
$w_{flow}=Pv$ expressed in $kJ/kg$  

**Total Energy of a Flowing Fluid**  
$e=u+\frac12V^2+gz$  
$\theta=h+\frac12V^2+gz$  

**Energy Transfer by Mass Flow**  
$E_m=m\theta=m(h+\frac12V^2+gz)$  
$\dot E_m=\dot m\theta=\dot m(h+\frac12V^2+gz)$  

### Energy Anaylsis of Steady-Flow

Mass, volume and total energy of a control volume do not change with time.  
$\Delta E_{sys}=E_{in}-E_{out}=0$  
$E_{in}=E_{out}$ or $E_i=E_f$  

**Mass Balance for Steady-Flow Process**  
$\sum\ \dot m_{in}=\sum\ \dot m_{out}$  
$\sum\ \rho A_iV_i=\sum\ \rho A_eV_e$  
*where *$V_i$* represents inlet velocity   
and *$V_e$* represents exit/outlet velocity*   

**Energy Balance for Steady-Flow Process**  
From the first law of thermodynamics, on a per unit time basis,  
$\dot Q_{in}+\dot W_{in}+\sum_{in}\dot m\theta =\dot Q_{out}+\dot W_{out}+\sum_{out}\dot m\theta$  
$\dot Q-\dot W=\dot m\Big[\Delta h+\frac12\Delta (V^2)+g\Delta z\Big]$  

If changes in kinetic and potential energies are negligible,  
$\dot m\Delta h=\dot Q-\dot W$  
$\Delta h=q-w$  

### Steady-Flow Engineering Devices

Subscript $1$ represents the inlet and subscript $2$ represents the exit/outlet.  

**Nozzles and Diffusers**  
$0=\dot m\Big[\Delta h+\frac12\Delta (V^2)\Big]$  
$0=h_2-h_1+\frac12({V_2}^2-{V_1}^2)$  
$h_1-h_2=\frac12({V_2}^2-{V_1}^2)$  
**Turbines and Compressors**  
$\dot Q-\dot W=\dot m(\Delta h)$  
$\dot Q-\dot W=\dot m(h_2-h_1)$  
If adiabatic, $\dot W=-\dot m(h_2-h_1)$  

**Throttling Valves**  
$0=\dot m(\Delta h)$  
$h_2=h_1$  
$u_2+Pv_2=u_1+Pv_1$  
$u_2+R_sT_2=u_1+R_sT_1$  
**Mixing Chambers**  
$0=\dot m(\Delta h)$  
$\sum \dot m_ih_i=\sum \dot m_eh_e$  

**Heat Exchangers**  
Control volume as the whole heat exchanger,  
$\sum \dot m_ih_i=\sum \dot m_eh_e$  

Control volume as around one of the fluids,  
$\dot Q=\dot m(\Delta h)$  
$\dot Q=\dot m(h_2-h_1)$  

### Energy Analysis of Unsteady-Flow

Changes within the control volume — changing mass, boundary work.  
$\Delta E_{sys}=E_{in}-E_{out}$  
$\Delta m_{CV}=m_{in}-m_{out}$  

**Uniform Flow Process**  
$E_{in}=Q_{in}+W_{in}+\sum_{in}m\theta$  
$E_{out}=Q_{out}+W_{out}+\sum_{out}m\theta$  
$E_2-E_1=Q-W+m_i\theta_i-m_e\theta_e$  

If changes in kinetic and potential energies are negligible,  
$U_2-U_1=Q-W+m_ih_i-m_eh_e$  

## Second Law of Thermodynamics

### Heat Engines

$\eta_{th} =\frac{W_{net}}{Q_{in}} =1-\frac{Q_{out}}{Q_{in}} =1-\frac{Q_L}{Q_H}$  

**Coefficient of Performance**  
$COP_R =\frac{Q_L}{W_{net}} =\frac{Q_L}{Q_H-Q_L} =\frac{1}{\frac{Q_H}{Q_L}-1}$  
$COP_{HP} =\frac{Q_H}{W_{net}} =\frac{Q_H}{Q_H-Q_L} =\frac{1}{1-\frac{Q_L}{Q_H}}$  

Combining the two equations above,  
$COP_{HP}=COP_R+1$  

---

### Carnot Heat Engines

$\eta_{th,rev}=1-\frac{T_L}{T_H}$  

**Coefficient of Performance**  
$COP_{R,rev} =\frac{1}{\frac{T_H}{T_L}-1}$  
$COP_{HP,rev} =\frac1{1-\frac{T_L}{T_H}}$  

## Entropy

### Clausius Inequality

$\oint\frac{dQ}{T}\le0 \ \longrightarrow\  \oint\frac{dQ}{T}_{rev}=0$   and   $\oint\frac{dQ}{T}_{irrev}<0$  
*Inequality equals to zero for a reversible process.  
Inequality less than zero for a irreversible process.*  

**Entrropy Change**  
$dS=\frac{dQ}{T}_{rev} \ \rightarrow\  T\ ds=dQ_{rev}$  
$\Delta S =\int\frac{dQ}{T}_{rev} =S_2-S_1$  
$\Delta S =\frac1{T_0}\int dQ_{rev} =\frac{Q}{T_0}$ *(isothermal process)*  

**Increase of Entropy Principle**  
$\Delta S_{sys} =\int\frac{dQ}{T}+S_{gen}$  
*where *$\int\frac{dQ}{T}$* represents entropy transfer through heat  
and *$S_{gen}$* represents entropy generation due to irreversibilities*  

### Entropy Change of Substances

$T\ ds$** Relations**  
$T\ ds=du+P\ dv$  
$T\ ds=dh-v\ dP$  

**Solids and Liquids**  
$ds=\frac{du}{T} =\frac{c_{avg}\ dT}{T} =c_{avg}\cdot\frac{dT}{T}$  
$\Delta s =c_{avg}\int^2_1\frac1T\ dT =c_{avg}\ ln\frac{T_2}{T_1}$  

**Ideal Gases**  
$ds=c_v\ \frac{dT}{T} +R_s\ \frac{dv}{v}$  
$\Delta s=c_v\ ln\frac{T_2}{T_1} +R_s\ ln\frac{v_2}{v_1}$  

$ds=c_p\ \frac{dT}{T} -R_s\ \frac{dP}{P}$  
$\Delta s =c_p\ ln\frac{T_2}{T_1} -R_s\ ln\frac{P_2}{P_1}$  

For isentropic processes, where $\Delta s=0$,  
$\frac{T_2}{T_1} =\Big(\frac{v_1}{v_2}\Big)^{k-1}$  
$ \frac{T_2}{T_1} =\Big(\frac{P_2}{P_1}\Big) ^{\frac{k-1}{k}}$  

For polytropic processes, $k$ is replaced with an $n$, where $1<n<k$.  

### Reversible Steady Flow Work

$dq_{rev}-dw_{rev}=dh+d(KE)+d(PE)$  
$T\ ds-dw_{rev}=dh+d(KE)+d(PE)$  
$dh-v\ dP-dw_{rev}=dh+d(KE)+d(PE)$  
$dw_{rev}=-v\ dP-d(KE)-d(PE)$  
$w_{rev}=-\int^2_1\ v\ dP -\Delta KE-\Delta PE$  

If kinetic and potential energies are negligible,  
$w_{rev}=-\int^2_1\ v\ dP$  

If working fluid is incompressible,  
$w_{rev}=-v(P_2-P_1)-\Delta KE-\Delta PE$  

**Polytropic Process of an Ideal Gas: **$Pv^n=const$  
$w_{comp} =-\frac{nR_s(T_2-T_1)}{n-1}$  

**Isentropic Process of an Ideal Gas: **$Pv^k=const$  
$w_{comp} =-\frac{kR_s(T_2-T_1)}{k-1}$  

**Isothermal Process of an Ideal Gas: **$Pv=const$  
$w_{comp} =-R_sT\ ln\frac{P_2}{P_1}$  

**Minimizing Compressor Work**  
$P_x=\sqrt{P_1\cdot P_2}$  
$\frac{P_x}{P_1}=\frac{P_2}{P_x}$  
*where *$x$* is the intermediate stage*  

### Isentropic Efficiencies of Steady-Flow Devices

**Turbines**  
$\eta_{tur} =\frac{Actual}{Isentropic} =\frac{w_a}{w_s} =\frac{h_1-h_{2a}}{h_1-h_{2s}}$  
*Actual work output of a turbine will be lower than an ideal turbine.*  

**Compressors and Pumps**  
$\eta_{comp} =\frac{Isentropic}{Actual} =\frac{w_s}{w_a} =\frac{h_{2s}-h_1}{h_{2a}-h_1}$  
*Ideal compressor requires lower work input than an actual compressor.*  

**Nozzles**  
$\eta_{noz} =\frac{Actual}{Isentropic} =\frac{{V_{2a}}^2}{{V_{2s}}^2} =\frac{h_1-h_{2a}}{h_1-h_{2s}}$  
*Actual exit velocity of fluid will be lower than that of an ideal nozzle.*  

### Entropy Balance

$\Delta S_{sys}=S_2-S_1 =S_{in}-S_{out}+S_{gen}$  

**Entropy Transfer through Heat Transfer**  
$\Delta S_{sys}=\frac{Q}{T}+S_{gen}$  
*where *$\frac{Q}{T}$* is entropy transfer through heat*  

**Entropy Transfer through Mass Flow**  
$\Delta S_{CV} =\sum\frac QT +\sum m_is_i-\sum m_es_e +S_{gen}$  

For a steady-flow process where $\Delta S_{CV}=0$,  
$S_{gen}=\sum m_es_e -\sum m_is_i-\sum\frac QT$  

## Refrigeration Cycles

### Vapor-Compression Cycle

An ideal vapor-compression cycle consists of:  
- Evaporator — isobaric and isothermal heat absorption process $q_L$
- Compressor — isentropic compression of working fluid $s_1=s_2$
- Condenser — isobaric and isothermal heat rejection process $q_H$
- Throttling valve — constant enthalpy pressure drop $h_3=h_4$

*Work input to the compressor, heat rejected in the condenser, and heat absorbed in the   
evaporator can be determined from the first law of thermodynamics. Note that if there   
are changes in pressure and temperature of the working fluid in the connecting pipes   
between each device, the properties at the outlet of one device may not be equal to   
that at the inlet of the next device.*  

**Coefficient of Performance**  
$COP_R =\frac{q_L}{w_{net}} =\frac{h_1-h_4}{h_2-h_1}$  
$COP_{HP} =\frac{q_H}{w_{net}} =\frac{h_2-h_3}{h_2-h_1}$  

*Note that for an actual vapor-compression cycle, the compression process is non-isentropic.   
Thus, we need to make use of the compressor’s isentropic efficiency to determine the actual   
work input to the cycle.*  

---

### Gas Refrigeration Cycle

A gas refrigeration cycle consists of:  
- Heat (addition) exchanger — isobaric heat absorption process $q_L$
- Compressor — isentropic compression of fluid $s_1=s_2$
- Heat (rejection) exchanger — isobaric heat rejection process $q_H$
- Turbine — isentropic expansion of fluid $s_3=s_4$

*Note that for a gas refrigeration cycle, the heat transfer processes in the heat exchangers   
occur at a constant pressure but are not isothermal processes. Also, since the working   
fluid is a gas, there is no saturation dome on the *$T$*-*$s$* diagram.*  

**Coefficient of Performance**  
$COP_R =\frac{q_L}{w_{net}} =\frac{q_L}{w_{comp}-w_{tur}} =\frac{h_1-h_4} {(h_2-h_1)-(h_3-h_4)}$  

## Gas Power Cycles

### Carnot Cycle

A Carnot power cycle consists of:  
- Isentropic compression process
- Isothermal heat addition process
- Isentropic expansion process
- Isothermal heat rejection process

Since the heat addition process is isothermal,   
amount of $q_{in}$ can be determined by $T\Delta s$.  
$q_{in} =T\Big(c_v\ ln\frac{T_2}{T_1} +R\ ln\frac{V_2}{V_1}\Big)$  
$q_{in} =T\Big(c_p\ ln\frac{T_2}{T_1} -R\ ln\frac{P_2}{P_1}\Big)$  

**Thermal Efficiency**  
$\eta_{th(Carnot)} =\frac{w_{net}}{q_{in}}$  
$\eta_{th(Carnot)} =1-\frac{T_L}{T_H}$  

### Otto Cycle

An Otto cycle consists of:  
- Isentropic compression process
- Isochoric heat addition process
- Isentropic expansion process
- Isochoric heat rejection process
Compression ratio is:  
$r=\frac{V_{max}}{V_{min}} =\frac{V_1}{V_2} =\frac{V_4}{V_3}$  

Mean effective pressure is:  
$MEP =\frac{W_{net}}{V_{max}-V_{min}}$  

The properties for the isentropic processes can be   
determined using isentropic relations of an ideal gas.  
$\frac{T_2}{T_1} =\Big(\frac{V_1}{V_2}\Big) ^{k-1} =\Big(\frac{P_2}{P_1}\Big) ^{\frac{k-1}{k}}$  

The properties for the isochoric processes can be   
determined using the ideal gas law $PV=mRT$.  

**Thermal Efficiency**  
$\eta_{th(Otto)} =\frac{Q_{in}-Q_{out}}{Q_{in}}$  
$\eta_{th(Otto)}=1-\frac1{r^{k-1}}$  

### Diesel Cycle

A Diesel cycle consists of:  
- Isentropic compression process
- Isobaric heat addition process
- Isentropic expansion process
- Isochoric heat rejection process
Compression ratio is:  
$r=\frac{V_{max}}{V_{min}} =\frac{V_1}{V_2}$  

Cutoff ratio is:  
$r_c=\frac{V_3}{V_2} =\frac{T_3}{T_2}$  

The properties for the isentropic processes can be   
determined using isentropic relations of an ideal gas.  
$\frac{T_2}{T_1} =\Big(\frac{V_1}{V_2}\Big) ^{k-1} =\Big(\frac{P_2}{P_1}\Big) ^{\frac{k-1}{k}}$  

The properties for the isobaric process can be determined by   
substituting the cutoff ratio into the above isentropic relations.  
$\frac{T_4}{T_3} =\Big(\frac{V_3}{V_4}\Big) ^{k-1} =\Big(\frac{V_3}{V_2}\times \frac{V_2}{V_1}\Big) ^{k-1}$  

For the heat addition process (isobaric),  
$q_{in}=c_p(T_3-T_2)$  

**Thermal Efficiency**  
$\eta_{th(Diesel)} =\frac{Q_{in}-Q_{out}}{Q_{in}}$  
$\eta_{th(Diesel)} =1-\frac{1}{k(r^{k-1})} \Big(\frac{{r_c}^k-1}{r_c-1}\Big)$  

### Brayton Cycle

A Brayton cycle consists of:  
- Isentropic compression process
- Isobaric heat addition process
- Isentropic expansion process
- Isobaric heat rejection process
Pressure ratio is:  
$r_p=\frac{P_2}{P_1}$  

The properties for the isentropic processes can be   
determined using isentropic relations of an ideal gas.  
$\frac{T_2}{T_1} =\Big(\frac{V_1}{V_2}\Big) ^{k-1} =\Big(\frac{P_2}{P_1}\Big) ^{\frac{k-1}{k}}$  

The properties for the isobaric processes can be   
determined using the ideal gas law $PV=mRT$.  

Backwork ratio of cycle,  
$r_{bw}=\frac{w_{comp}}{w_{tur}} =\frac{h_2-h_1}{h_3-h_4}$  

Thermal efficiency of cycle,  
$\eta_{th(Brayton)} =\frac{Q_{in}-Q_{out}}{Q_{in}}$  
$\eta_{th(Brayton)} =1-\frac1{r^{k-1}}$  

**Jet Propulsion**  
A Brayton cycle for jet propulsion consists of:  
- Isentropic compression process in the diffuser
- Isentropic compression process in the compressor
- Isobaric heat addition process
- Isentropic expansion in the turbine
- Isentropic expansion in the nozzle
- Isobaric heat rejection process

For the diffuser, it is assumed that the air exits with zero velocity.  
$h_2=h_1+\frac12{V_1}^2$  
$c_pT_2=c_pT_1+\frac12{V_2}^2$  

For the nozzle, it is assumed that the air enters with zero velocity.  
$h_6+\frac12{V_6}^2=h_5$  
$c_pT_6+\frac12{V_6}^2=c_pT_5$  

For jet propulsion, the turbine produces enough work to power the compressor.  
$w_{tur}=w_{comp}$  
$c_p(T_4-T_5) =c_p(T_3-T_2)$  

Thrust produced by the exhaust gases,  
$F_{thrust}=\dot m(V_e-V_i)$  
*Mass flow rate of fuel is negligible.*  

Propulsive power developed from the thrust,  
$\dot W_{prop} =F_{thrust}\cdot V_{aircraft}$  

Propulsive efficiency of the engine,  
$\eta_{prop} =\frac{\dot W_{prop}}{\dot Q_{in}}$  

## Vapor Power Cycles

### Rankine Cycle

A Rankine cycle consists of:  
- Isentropic compression in a pump (saturated liquid)
- Isobaric heat addition process
- Isentropic expansion in a turbine
- Isobaric heat rejection process

Working fluid is compressed as a saturated liquid.  
$w_{pump}=h_2-h_1=v(P_2-P_1)$  
*Note that the above equation gives isentropic work input.*  

Backwork ratio of an ideal Rankine cycle,  
$r_{bw}=\frac{w_{pump}}{w_{tur}} =\frac{h_2-h_1}{h_3-h_4}$  

Thermal efficiency of a Rankine cycle,  
$\eta_{th(Rankine)} =\frac{w_{net}}{q_{in}} =1-\frac{q_{out}}{q_{in}}$  

**Rankine Cycle with Reheating**  
$q_{in}=q_{initial}+q_{reheat}$  
$q_{in}=(h_3-h_2)+(h_5-h_4)$  
*Additional heat added between the turbines needs to be accounted for.*  

**Rankine Cycle with Regeneration**  
Open feedwater heater:  
- A fraction of steam is extracted from the turbine
- Extracted steam mixes with compressed fluid from low-pressure pump
- Mixture from feedwater heater enters a high-pressure pump (boiler pressure)
- Fluid is first pumped to heater pressure, then boiler pressure (connected in series)

Energy balance for open feedwater heater,  
$yh_6+(1-y)h_2=h_3$  
*where *$y$* is the fraction of steam extracted*  

Closed feedwater heater:  
- A fraction of steam is extracted from the turbine
- Extracted steam exchanges heat with compressed fluid from pump
- Extracted steam condenses in the heater and enters a separate pump
- Each pump compresses the fluid to boiler pressure (connected in parallel)

Energy balance for closed feedwater heater,  
$yh_7+(1-y)h_2 =yh_3+(1-y)h_9$  

---

### Co-generation

**Utilization Factor**  
$\epsilon_u =\frac{\dot W_{net}+\dot Q_P} {\dot Q_{in}}$  
*where *$\dot Q_P$* is heat supplied by process heater*  

## Gas Mixtures

$N=\frac{m}{M}$ where $M$ is molar mass in $kg/kmol$  
$PV=NR_uT$ where $R_u=8.31447\ kJ/kmol\cdot K$  

**Dimensionless Ratios**  
Mole fraction of components,  
$y_i =\frac{N_i}{N_{mix}} =\frac{P_i}{P_{mix}} =\frac{V_i}{V_{mix}}$  

Mass fraction of components,  
$mf_i =\frac{m_i}{m_{mix}} =\frac{N_iM_i}{N_{mix}M_{mix}} =y_i\Big(\frac{M_i}{M_{mix}}\Big)$  

**Mixture Properties**  
Molar number of a mixture,  
$M_{mix} =\frac{m_{mix}}{N_{mix}} =\frac{\sum m_i}{N_{mix}} =\frac{\sum N_iM_i}{N_{mix}} =\sum y_iM_i$  

Gas constant of a mixture,  
$R_{mix}M_{mix}=R_u$  
$\frac{kJ}{kg\cdot K}\times \frac{kg}{kmol} =\frac{kJ}{kmol\cdot K}$  

Specific heats per unit mass,  
$c_{p_{mix}}=\sum mf_ic_{p_i}$  
$c_{v_{mix}}=\sum mf_ic_{v_i}$  
Specific heats per unit mole,  
$\bar c_{p_{mix}} =\sum y_i\bar c_{p_i}$  
$\bar c_{v_{mix}} =\sum y_i\bar c_{v_i}$  

## Gas-Vapor Mixtures

Total pressure of air containing moisture (water vapor),  
$P=P_{a}+P_v$  
*where *$P_a$* is the partial pressure of dry air  
and *$P_v$* is the partial pressure of water vapor*  

Enthalpy of water vapor can be approximated as enthalpy of saturated vapor.  
$h_{v}(T)\approx h_g(T)$  

Absolute/specific humidity of air,  
$\omega =\frac{m_v}{m_a} =0.622\frac{P_v}{P_a} =\frac{0.622P_v}{P-P_v}$  

Relative humidity of air,  
$\phi =\frac{m_v}{m_g} =\frac{P_v}{P_g}$  
*where *$P_g$* is the saturation pressure of   
the water vapor at a given temperature*  

Energy balance for air-conditioning processes,  
$E_{in}=E_{out}$  
$Q_{in}+W_{in}+\sum m_ih_i =Q_{out}+W_{out}+\sum m_eh_e$  
*Note that if humidification/dehumidification takes place, the mass of   
water added/removed needs to be included in the energy equation.*  

## Chemical Reactions

### Combustion Process

Dry air can be approximated as,  
$1\ kmol\ O_2 +3.76\ kmol\ N_2 =4.76\ kmol\ Air$  

Air-fuel ratio on a mass basis:  
$AF=\frac{m_{air}}{m_{fuel}}$  

Air-fuel ratio on a mole basis:  
$\bar{AF}=\frac{N_{air}}{N_{fuel}}$  

Chemical equation for combustion process,  
$Fuel+Dry\ Air \rightarrow Combustion\ Products$  
*Unless stated, it is assumed that the fuel reacts with dry air.*  

If fuel reacts with air containing moisture (water vapor),  
$Fuel+Dry\ Air+Moisture \rightarrow Combustion\ Products$  

Number of moles of water vapor accompanying the dry air,  
$\phi =\frac{P_v}{P_g} =\frac{P_{H_2O}}{P_{sat@T}}$  
$y_{H_2O} =\frac{N_{H_2O}}{N_{air}+N_{H_2O}} =\frac{P_{H_2O}}{P_{air}}$  
*where *$N_{air}=a_{th}(1+3.76)$* and *$N_{H_2O}$* is expressed in terms of *$a_{th}$  

---

### Reacting Systems

Reference state is defined as a state at a temperature of $25\degree C$ and pressure of $1\ atm$.  

**Steady-Flow System**  
Enthalpy of a component,  
$H=N\Big[\bar h_f^\degree +(\bar h-\bar h{\degree})\Big] =N\Big[\bar h_f^\degree +\Delta\bar h\Big]$  
*where *$\bar h_f^\degree$* is enthalpy of formation at reference state,   
and *$\bar h^\degree$* is the sensible enthalpy at reference state,   
and *$\bar h$* is the sensible enthalpy at given temperature*  

First law for combustion process,  
$Q-W =\sum N(\bar h_f^\degree +\Delta\bar h)_p -\sum N(\bar h_f^\degree +\Delta\bar h)_r$  
*Note that if the reactants are at the reference state, *$\Delta\bar h_r=0$*.  
The first law equation has units of *$kJ/kmol\ fuel$*.*  

**Closed System**  
Internal energy of a component,  
$U=N\Big[\bar h_f^\degree +\Delta\bar h-P\bar v\Big] =N\Big[\bar h_f^\degree +\Delta\bar h-R_uT\Big]$  

First law for combustion process,  
$Q-W =\sum N(\bar h_f^\degree +\Delta\bar h-P\bar v)_p -\sum N(\bar h_f^\degree +\Delta\bar h-P\bar v)_r$  
$Q-W =\sum N(\bar h_f^\degree +\Delta\bar h-R_uT)_p -\sum N(\bar h_f^\degree +\Delta\bar h-R_uT)_r$  
*Note that if the reactants are at the reference state, *$\Delta\bar h_r=0$*.  
The first law equation has units of *$kJ/kmol\ fuel$*.*  

**Adiabatic Flame Temperature**  
Assuming no heat loss, temperature of the products reaches a maximum.  
$\sum N(\bar h_f^\degree +\Delta\bar h)_p =\sum N(\bar h_f^\degree +\Delta\bar h)_r$  

---

### Enthalpy of Combustion

Enthalpy of combustion at the reference state,  
$\bar h_C^\degree =\sum\ N(\bar h_f^\degree)_p -\sum\ N(\bar h_f^\degree)_r$  
*where *$\bar h_C^\degree$* is expressed in *$kJ/kmol\ fuel$  

At states other than the reference state,  
$\bar h_C=\bar h_C^\degree +\sum\ N(\Delta\bar h)_p -\sum\ N(\Delta\bar h)_r$  
