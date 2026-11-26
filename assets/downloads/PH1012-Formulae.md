# PH1012 - Formulae

> PH1012 · PHYSICS A — exported from Lousy Engineering

---

## Mechanics

### Vectors

**Vector Components**  
$\vec{R}=\vec{A}+\vec{B}$  
$\vec{R}_x=\vec{A}_x+\vec{B}_x$  
$\vec{R}_y=\vec{A}_y+\vec{B}_y$  
$|\vec{R}|=\sqrt{(R_x)^2+(R_y)^2}$  
$\theta=tan^{-1}\frac{R_y}{R_x}$  

**Dot (Scalar) Product**  
$\vec{A}\cdot\vec{B}=ABcos\theta$  
$\vec{A}\cdot\vec{B} =A_xB_x +A_yB_y +A_zB_z$  

**Cross (Vector) Product**  
$\vec{A}\times\vec{B}=ABsin\theta$  
$\vec{A}\times\vec{B}= \begin{vmatrix} \hat{i}&\hat{j}&\hat{k}\\ A_x&A_y&A_z\\ B_x&B_y&B_z \end{vmatrix}$  
$\vec{A}\times\vec{B}=(A_yB_z-A_zB_y)\hat{i} -(A_xB_z-A_zB_x)\hat{j} +(A_xB_y-A_yB_x)\hat{k}$  

### Motion in a Straight Line

**Average and Instantaneous Velocity**  
$v_{avg(x)}=\frac{x-x_0}{t-t_0}=\frac{\Delta{x}}{\Delta{t}}$  
$v_{x}=\frac{dx}{dt}$  

**Average and Instantaneous Acceleration**  
$a_{avg(x)}=\frac{v_x-v_{0x}}{t-t_0}=\frac{\Delta{v_x}}{\Delta{t}}$  
$a_{x}=\frac{v_x-v_{0x}}{t-t_0}=\frac{dv_x}{dt}$  

**Uniform Acceleration and Free Fall**  
$v=v_{0x}+a_xt$  
$x=x_0+v_{0x}t+\frac12a_xt^2$  
${v_x}^2={v_{0x}}^2+2a(x-x_0)$  

$x=\frac12(a+b)h$ → for finding area of a trapezium  

### Motion in Two/Three Dimensions

**Projectile Motion**  
$x=x_0+v_{0x}t$  
$y=y_0+v_{0y}t+\frac 12at^2$  

$v_{0x}=v_0cos\theta$  
$v_{0y}=v_0sin\theta$  
$v_y=v_{0y}+at$  

**Uniform Circular Motion**  
$\omega=\frac{2\pi}{T}$  
$v=r\omega$  
$a_{rad}=\frac{v^2}{r}=r\omega^2$  

**Relative Velocity**  
$v_{A/C}=v_{A/B}+v_{B/C}$  
$v_{A/B}=-v_{B/A}$  

### Newton’s Laws of Motion

**Newton’s Second Law**  
$\sum\vec F=m\vec a$  
$\sum F=\frac{mv^2}{r}$  
$\sum F=mr\omega^2$  

**Newton’s Third Law**  
$\vec F_{A\ on\ B}=-\vec F_{B\ on\ A}$  

**Kinetic and Static Friction**  
$F_k=\mu_kF_n$  
$F_s\le\mu_sF_n$  

**Fluid Resistance and Terminal Velocity**  
Small objects moving at very low speeds.  
$F=kv$  
$v_t=\frac{mg}{k}$  

Larger objects moving at higher speeds.  
$F=Dv^2$  
$v_t=\sqrt{\frac{mg}{D}}$  

### Work and Kinetic Energy

**Work Done and Power**  
$W=\vec{F}\cdot\vec{s}=Fscos\theta$  
$P=\vec F\cdot\vec v$  

**Work Done by a Spring**  
$F_s=-kx$  
$W_s=\frac12k{x_i}^2-\frac12k{x_f}^2$  

**Work Done on a Spring**  
$W_{app}=\frac12k{x_f}^2-\frac12k{x_i}^2$  

**Work-Energy Theorem**  
$K=\frac12mv^2$  
$W_{tot}=\Delta K$  

### Energy Conservation

**Gravitational Potential Energy**  
$U_{grav}=mgy$  
$W_{grav}=-\Delta U_{grav}$  

$K_i+U_{grav,i}=K_f+U_{grav,f}$  
$\frac12m{v_1}^2+mgy_1=\frac12m{v_2}^2+mgy_2$  

**Elastic Potential Energy**  
$U_{el}=\frac12kx^2$  
$W_{el}=-\Delta U_{el}$  

$K_i+U_{el,i}=K_f+U_{el,f}$  
$\frac12m{v_1}^2+\frac12k{x_1}^2=\frac12m{v_2}^2+\frac12k{x_2}^2$  

$K_i+U_i+W_{other}=K_f+U_f$  

**Law of Conservation**  
$E=K+U$ → if only conservative forces do work  

$\Delta U_{int}=-W_{other}$  
$\Delta K+\Delta U+\Delta U_{int}=0$  

**Force and Potential Energy**  
$F=-\frac{dU}{dx}$  

$U=-\frac{GMm}{r}$  
$\frac12m{v_i}^2+(-\frac{GMm}{r_i})=\frac12m{v_f}^2+(-\frac{GMm}{r_f})$  
When gravity is not constant, $mgy$ cannot be used.  

### Momentum and Collisions

**Momentum and Impulse**  
$\vec p=m\vec v$  
$ \vec J=\vec p_f-\vec p_i$  
$\vec J=\sum\vec F(t_f-t_i)$  

$F_{thrust}=v\ \frac{dm}{dt}$  

**Elastic Collisions**  
$m_Av_{A1}+m_Bv_{B1}=m_Av_{A2}+m_Bv_{B2}$  
$\frac12m_A{v_{A1}}^2+\frac12m_B{v_{B1}}^2=\frac12m_A{v_{A2}}^2+\frac12m_B{v_{B2}}^2$  

$v_{A1}-v_{B1}=-(v_{A2}-v_{B2})$  

**Inelastic Collisions**  
$m_Av_{A1}+m_Bv_{B1}=(m_A+m_B)v_2$  

### Rotation of Rigid Bodies

**Angular Displacement**  
$s=r\theta$  

**Rotation with Constant Acceleration**  
$\omega_z=\omega_{0z}+\alpha_zt$  
$\theta=\theta_0+\omega_{0z}t+\frac12\alpha_zt^2$  
${\omega_z}^2={\omega_{0z}}^2+2\alpha_z(\theta-\theta_0)$  

**Linear and Angular Acceleration**  
$a_{tan}=r\alpha$  
$a_{rad}=r\omega^2$  

**Rotational Kinetic Energy**  
$K_R=\frac12I\omega^2$  
$I=\sum_i\ m_i{r_i}^2$  
$I_P=I_{cm}+Md^2$  

$\vec r_{cm}=\frac{\sum m_i\vec r_i}{\sum m_i}$  

### Dynamics of Rotational Motion

**Torque and Angular Acceleration**  
$\vec\tau=\vec r\times\vec F=rFsin\theta$  
$\sum \tau=I\alpha$  
$\sum W=\frac12I{\omega_f}^2-\frac12I{\omega_i}^2$  

**Rolling Motion of a Rigid Object**  
$K_R=\frac12I_{cm}\omega^2+\frac12M{v_{cm}}^2$  

### Fluid Mechanics

**Density and Pressure**  
$\rho=\frac mV$  

$P=\frac FA$  
$P=P_0+\rho gh$  
$P_{abs}=P_{atm}+P_{gauge}$  

**Buoyancy**  
$F_{b}=\rho_{fluid}V_{displaced}g$  

**Continuity Equation**  
$\frac{dV}{dt}=Av$  
$\dot m=\rho Av$  

**Bernoulli’s Equation**  
$p_1+\rho gy_1+\frac12\rho {v_1}^2=p_2+\rho gy_2+\frac12\rho {v_2}^2$  

### Universal Gravitation

**Newton’s Law of Gravitation**  
$G=6.67\times10^{-11}\space N\cdot m^2/kg^2$  
$F_g=\frac {Gm_1m_2}{r^2}$  

$w=F_g=\frac{Gm_Em}{{R_E}^2}$  
$g=\frac{Gm_E}{{R_E}^2}$  

**Motion of Satellites**  
$\frac{Gm_Em}{r^2}=\frac{mv^2}{r}$  
$v=\sqrt{\frac{Gm_E}{r}}$  
$T=\frac{2\pi r}{v}$  

## Thermodynamics

### Temperature and Heat

**Thermal Expansion**  
$L=L_0+\Delta L=L_0(1+\alpha \Delta T)$  
$V=V_0+\Delta V=V_0(1+\beta \Delta T)$  

**Quantity of Heat**  
$Q=mc\Delta T$  
$Q=nC\Delta T$  
$Q=\pm mL$  

### Thermal Properties of Matter

**Idea Gas Equation**  
$R=8.314\space J/mol\cdot K$  
$PV=nRT$  

**Avogadro’s Number**  
$N_A=6.02\times10^{23}\ molecules/mol$  
$k_B=\frac{R}{N_A}=1.38\times10^{-23}\ J/K$  

**Kinetic Theory of Gases**  
$K_{tr(tot)}=\frac12M\overline{v^2}=\frac32nRT=\frac32Nk_BT$  
$v_{rms}=\sqrt{\overline{v^2}}=\sqrt{\frac{3RT}{M}}=\sqrt{\frac{3k_BT}m}$  

$U=\frac32nRT=\frac32Nk_BT$ → Monatomic gases  
$U=\frac52nRT=\frac52Nk_BT$ → Diatomic gases  
$U=\frac72nRT=\frac72Nk_BT$ → Polyatomic gases  

**Heat Capacities of Gases**  
$C_V=\frac32R$ → Monatomic gases  
$C_V=\frac52R$ → Diatomic gases  

### The First Law of Thermodynamics

**Internal Energy and the First Law**  
$\Delta U=Q-W$  

Adiabatic process → $\Delta U=-W$  
Isochoric process → $\Delta U=Q$  
Isobaric process → $W=P(V_f-V_i)$  

**Heat Capacities of an Ideal Gas**  
$C_P=C_V+R$  
$\gamma=\frac{C_P}{C_V}$  

**Adiabatic Process**  
$TV^{\gamma-1}=Constant$  
$PV^\gamma=Constant$  
$W=nC_V(T_i-T_f)$  
$W=\frac1{1-\gamma}(P_fV_f-P_iV_i)$  

**Isochoric Process**  
$Q=\frac32nR\Delta T=nC_V\Delta T$  

**Isobaric Process**  
$Q=\frac52nR\Delta T$ → Monatomic gases  

**Isothermal Process**  
$W=nRT\ ln\Big(\frac{V_f}{V_i}\Big)$  

## Electromagnetism

### Electric Fields

**Coulomb’s Law**  
$ F_e=k_e\frac{|q_1q_2|}{r^2}$  
$k_e=\frac1{4\pi\epsilon_0}=8.99\times10^9\ Nm^2/C^2$  
$\epsilon_o=8.854\times10^{-12}\ C^2/Nm^2$  
$ \epsilon_0=8.854\times10^{-12}\ F/m$  

**Electric Field of a Point Charge**  
$\vec E=\frac{\vec F_0}{q_0}$  
$E=k_e\frac{|q|}{r^2}$  
$\vec E=k_e\frac{q}{r^2}\ \hat r$  
$\hat r=\frac{\vec r}{r}$  

### Gauss’s Law

**Flux of a Uniform Electric Field**  
$\Phi_E=EAcos\theta$  

**Flux of a Point Charge in a Closed Surface**  
$\Phi_E=\frac{q_{in}}{\epsilon_0}$  

**Application of Gauss’s Law**  
$E_{plane}=\frac{\sigma}{2\epsilon_0}$  
$E_{line}=\frac1{2\pi\epsilon_0}\frac{\lambda}{r}=2k_e\frac{\lambda}{r}$  

$E_{sphere(inside)}=\frac1{4\pi\epsilon_0}\frac{Qr}{R^3}=k_e\frac{Qr}{R^3}$  
$E_{sphere(outside)}=\frac1{4\pi\epsilon_0}\frac{Q}{R^2}=k_e\frac{Q}{R^2}$  

$E_{charged\ plates}=\frac{\sigma}{\epsilon_0}$  

### Electric Potential

**Electric Potential Energy**  
$K_i+U_{elec,i}=K_f+U_{elec,f}$  
$U_{elec}=\frac{1}{4\pi\epsilon_0}\frac{qq_0}r=k_e\frac{qq_0}{r}$ (two point charges)  
$U_{elec}=q_0Ey$ (in a uniform electric field)  

**Electric Potential**  
$V=\frac{U_{elec}}{q_0}$  
$V=\frac1{4\pi\epsilon_0}\frac{q}{r}=k_e\frac{q}{r}$  
$ V=\frac{1}{4\pi\epsilon_0}\sum\frac{q_i}{r_i}=k_e\sum\frac{q_i}{r_i}$  

$\frac{W}{q_0}=V_a-V_b$  
$ V_a-V_b=\int^b_a\vec E\cdot d\vec s$  
$E=-\frac{dV}{ds}$  

### Capacitance and Dielectrics

**Capacitance**  
$C=\frac{Q}{V_{diff}}$  

$E=\frac{\sigma}{\epsilon_0}=\frac{Q}{\epsilon_0A}$  
$V_{diff}=Ed=\frac{Qd}{\epsilon_0A}$  
$C=\epsilon_0\frac{A}{d}$  

**Series Connection**  
$\frac1{C_{eq}}=\frac1{C_1}+\frac1{C_2}+\frac1{C_3}+...$  
**Parallel Connection**  
$ C_{eq}=C_1+C_2+C_3+...$  

**Potential Energy in a Capacitor**  
$U=\frac{Q^2}{2C}=\frac12QV=\frac12CV^2$  
**Electric Field Energy**  
$u=\frac12\epsilon_0E^2$  

### Current and Resistance

**Electric Current**  
$I=\frac{dQ}{dt}=n|q|v_dA$  
$J=\frac{I}{A}=nqv_d$  

**Resistivity and Resistance**  
$\rho=\frac EJ$  
$\sigma=\frac{1}{\rho}$  

$R=\frac{\rho L}{A}$  

$\rho=\rho_0[1+\alpha(T-T_0)]$  
$R=R_0[1+\alpha(T-T_0)]$  

### Direct Current Circuits

**Charging a Capacitor**  
$q=C\varepsilon(1-e^{-t/RC})=Q_f(1-e^{-t/RC})$  
$i=\frac{\varepsilon}{R}e^{-t/RC}=I_0e^{-t/RC}$  

**Discharging a Capacitor**  
$q=Q_0e^{-t/RC}$  
$i=-\frac{Q_0}{RC}e^{-t/RC}=-I_0e^{-t/RC}$  

**Time Constant**  
$ \tau=RC$  

### Magnetic Fields

**Magnetic Forces on Moving Charges**  
$\vec F_B=q\vec v\times\vec B$  
$|F_B|=|q|vBsin\theta$  

**Magnetic Forces on a Straight Wire**  
$ \vec F_B=I\vec l\times\vec B$  
$|F_B|=IlBsin\theta$  

**Motion in a Uniform Magnetic Field**  
$F_B=qvB=\frac{mv^2}{r}$  

**Gauss’s Law for Magnetism**  
$\oint\vec B\cdot d\vec A=0$  

**Sources of Magnetic Fields**  
$\mu_0=4\pi\times10^{-7}\ T\cdot m/A$  

$B_{straight\ conductor}=\frac{\mu_0I}{2\pi r}$  
$B_{circular\ loop\ (center)}=\frac{\mu_0NI}{2r}$  
$B_{solenoid}=\mu_0nI$  

**Force between Parallel Conductors**  
$F=\frac{\mu_0I_1I_2}{2\pi r}\ l$  
$\frac FL=\frac{\mu_0I_1I_2}{2\pi r}$  

**Ampere’s Law**  
$\oint\vec B\cdot d\vec l=\mu_0I_{encl}$  

### Electromagnetic Induction

**Faraday’s Law**  
$\varepsilon=-\frac{d\Phi_B}{dt}$  
$\varepsilon=-N\ \frac{d\Phi_B}{dt}$ → for a flat coil  

**Lenz’s Law**  
$\varepsilon=\oint (\vec v\times\vec B)\cdot d\vec l$  
$\varepsilon=Blv$  

$\oint\vec E\cdot d\vec l=-\frac{d\Phi_B}{dt}$  
$El=-\frac{d\Phi_B}{dt}$  
