# MA3701 - Formulae

> MA3701 · AERODYNAMICS — exported from Lousy Engineering

---

## Fluid Mechanics

### Fluid Viscosity

One-dimensional flow:     $\tau =\mu\frac{\partial u}{\partial y}$ *where *$\mu$* is dynamic viscosity expressed in *$Pa\cdot s$  
Two-dimensional flow:     $\tau=\mu\Big( \frac{\partial u}{\partial y} +\frac{\partial v}{\partial x} \Big)$ *when velocity gradient is non-linear*  
$\nu=\frac{\mu}{\rho}$ *where *$\nu$* is kinematic viscosity expressed in *$m^2/s$  

**Dimensionless Numbers**  

| Reynolds number *(most fluid problems)* | $Re=\frac{Inertia\ Force} {Viscous\ Force} =\frac{\rho UL}{\mu} =\frac{UL}{\nu}$ |
| --- | --- |
| Froude number *(free surface flows)* | $Fr=\frac{Inertia\ Force} {Gravitational\ Force} =\frac{U}{\sqrt{gL}}$ |
| Euler number *(flows with pressure differentials)* | $Eu=\frac{Pressure\ Force} {Inertia\ Force} =\frac{p}{\rho U^2}$ |
| Strouhal number *(compressible flows)* | $St=\frac{Local\ Inertia\ Force} {Convective\ Inertia\ Force} =\frac{fL}{U}$ |
| Weber number *(flows with surface tension)* | $We=\frac{Inertia\ Force} {Surface\ Tension\ Force} =\frac{\rho U^2L}{\sigma}$ |

*where *$U$* is flow velocity and *$L$* is characteristic length*  

---

### Pressure, Lift and Drag Coefficients

$C_p=\frac{p-p_\infin} {\frac12\rho_\infin{U_\infin}^2} =1-\frac{U^2}{{U_\infin}^2}$  
$C_L=\frac{L}{\frac12\rho_\infin{U_\infin}^2A}$  
$C_D=\frac{D}{\frac12\rho_\infin{U_\infin}^2A}$  
$p_\infin +\frac12\rho_\infin {U_\infin}^2 =p+\frac12\rho_\infin{U}^2$  
$p-p_\infin =\frac12\rho_\infin {U_\infin}^2 \Big(1-\frac{U^2}{{U_\infin}^2}\Big)$  
$\frac{p-p_\infin} {\frac12\rho_\infin{U_\infin}^2} =1-\frac{U^2}{{U_\infin}^2}$  
*where *$\infin$* represents the freestream property*  

---

### Governing Equations

**Conservation of Mass**  
Differential form of continuity equation:  
$\frac{\partial\rho}{\partial t} +\frac{\partial(\rho u)} {\partial x} +\frac{\partial(\rho v)} {\partial y} +\frac{\partial(\rho w)} {\partial z}=0$  

For incompressible fluids where $\rho=const$:  
$\frac{\partial u}{\partial x} +\frac{\partial v}{\partial y} +\frac{\partial w}{\partial z} =0$  

**Conservation of Momentum**  
Navier-Stokes equations:  
$\rho\frac{Du}{Dt} =\rho g_x -\frac{\partial p}{\partial x} +\frac{\partial}{\partial x} \bigg[\mu\Big( 2\frac{\partial u}{\partial x} -\frac23\nabla\cdot\bold V\Big) \bigg] +\frac{\partial}{\partial y} \bigg[\mu\Big( \frac{\partial u}{\partial z}+ \frac{\partial w}{\partial x}\Big) \bigg] +\frac{\partial}{\partial z} \bigg[\mu\Big( \frac{\partial u}{\partial z}+ \frac{\partial w}{\partial x}\Big) \bigg]$  
$\rho\frac{Dv}{Dt}=\rho g_y -\frac{\partial p}{\partial y} +\frac{\partial}{\partial x} \bigg[\mu\Big( \frac{\partial u}{\partial y}+ \frac{\partial v}{\partial x}\Big) \bigg] +\frac{\partial}{\partial y} \bigg[\mu\Big( 2\frac{\partial v}{\partial z} -\frac23\nabla\cdot\bold V\Big) \bigg] +\frac{\partial}{\partial z} \bigg[\mu\Big( \frac{\partial v}{\partial z}+ \frac{\partial w}{\partial y}\Big) \bigg]$  
$\rho\frac{Dw}{Dt}=\rho g_z -\frac{\partial p}{\partial z} +\frac{\partial}{\partial x} \bigg[\mu\Big( \frac{\partial u}{\partial z}+ \frac{\partial w}{\partial x}\Big) \bigg] +\frac{\partial}{\partial y} \bigg[\mu\Big( \frac{\partial v}{\partial z}+ \frac{\partial w}{\partial y}\Big) \bigg] +\frac{\partial}{\partial z} \bigg[\mu\Big( 2\frac{\partial w}{\partial z} -\frac23\nabla\cdot\bold V\Big) \bigg]$  

If viscosity is taken to be negligible:  
$ \rho\frac{Du}{Dt} =\rho\Big( \frac{\partial u}{\partial t}+ u\frac{\partial u}{\partial x}+ v\frac{\partial u}{\partial y}+ w\frac{\partial u}{\partial z} \Big) =\rho g_x -\frac{\partial p}{\partial x}$  
$ \rho\frac{Dv}{Dt} =\rho\Big( \frac{\partial v}{\partial t}+ u\frac{\partial v}{\partial x}+ v\frac{\partial v}{\partial y}+ w\frac{\partial v}{\partial z} \Big) =\rho g_y -\frac{\partial p}{\partial y}$  
$ \rho\frac{Dw}{Dt} =\rho\Big( \frac{\partial w}{\partial t}+ u\frac{\partial w}{\partial x}+ v\frac{\partial w}{\partial y}+ w\frac{\partial w}{\partial z} \Big) =\rho g_z -\frac{\partial p}{\partial z}$  
*The above equations are known as Euler’s equations.*  

**Conservation of Energy**  
Bernoulli’s equation (valid for only inviscid and incompressible flows):  
$p_1+\frac12\rho{u_1}^2+\rho gz_1 =p_2+\frac12\rho{u_2}^2+\rho gz_2$  

## Potential Flow Theory

### Vorticity $\zeta$

For a 2-dimensional flow:  
$\zeta=2\omega_z =\frac{\partial v}{\partial x} -\frac{\partial u}{\partial y}$  
*If *$\zeta=0$*, the flow is called irrotational (ideal).  
If *$\zeta\ne0$*, the flow is called rotational (real).*  

### Circulation $\Gamma$

For a 2-dimensional flow:  
$\Gamma=\zeta A$  
*Circulation is the measure of the strength of the fluid flow.  
It is the sum of the vorticity enclosed within the area of interest.*  

### Stream Function $\psi$

A 2-dimensional flow that satisfies the continuity equation is a steady flow.  

**Cartesian Coordinates**  
Continuity equation:  
$\frac{\partial u}{\partial x} +\frac{\partial v}{\partial y} =0$  

Velocity components:  
$u=\frac{\partial\psi}{\partial y}$  
$v=- \frac{\partial\psi}{\partial x}$  
**Polar Coordinates**  
Continuity equation:  
$\frac1r \frac{\partial(rv_r)}{\partial r} +\frac1r\frac{\partial v_\theta}{\partial\theta}=0$  

Velocity components:  
$v_r=\frac1r\frac{\partial\psi}{\partial\theta}$  
$v_\theta=-\frac{\partial\psi}{\partial r}$  

**Laplace Equation**  
$\frac{\partial^2\psi} {\partial x^2}+ \frac{\partial^2\psi} {\partial y^2}=0$  

**Interpretation of Stream Function**  
$d\psi=u\ dy-v\ dx=0$  
*Change in *$d\psi$* along a streamline is zero.*  

The change in $\psi$ is zero along a streamline;   
lines along which $\psi$ is a constant are streamlines.  

### Velocity Potential $\phi$

**Cartesian Coordinates**  
Velocity components:  
$u=\frac{\partial\phi}{\partial x}$  
$v=\frac{\partial\phi}{\partial y}$  
**Polar Coordinates**  
Velocity components:  
$v_r=\frac{\partial\phi} {\partial r}$  
$v_\theta=\frac1r \frac{\partial\phi}{\partial\theta}$  

*Note that potential function share common velocity components with stream function.*  
$u=\frac{\partial\psi}{\partial y} =\frac{\partial\phi}{\partial x}$  
$v=-\frac{\partial\psi}{\partial x} =\frac{\partial\phi}{\partial y}$  
$v_r=\frac1r\frac{\partial\psi}{\partial\theta} =\frac{\partial\phi} {\partial r}$  
$v_\theta=-\frac{\partial\psi}{\partial r} =\frac1r\frac{\partial\phi}{\partial\theta}$  

**Laplace Equation**  
$\frac{\partial^2\phi} {\partial x^2}+ \frac{\partial^2\phi} {\partial y^2}=0$  

**Relationship with Stream Function**  
For a streamline where $d\psi=0$:  
$\big(\frac{dy}{dx}\big) _{\psi=const} =\frac vu$  

For a potential line where $d\phi=0$:  
$\big(\frac{dy}{dx}\big) _{\phi=const} =-\frac uv$  

Slope of streamline is the negative reciprocal of potential line:  
$\big(\frac{dy}{dx}\big) _{\psi=c}=-\frac1{\big( \frac{dy}{dx} \big)_{\phi=c}}$  

### Basic Plane Potential Flows

A potential flow is characterized by incompressibility and irrotationality $\zeta=0$.  

**Uniform Flow**  
Velocity components:  
$u=\frac{\partial\psi}{\partial y} =U$  
$v=-\frac{\partial\psi}{\partial x} =0$  

For a horizontal uniform flow:  
$\psi=Uy=Ursin\theta$  
$\phi=Ux=Urcos\theta$  

For a uniform flow at some arbitrary angle:  
$\psi=U(ycos\alpha-xsin\alpha)$  
$\phi=U(xcos\alpha+ysin\alpha)$  
Untitled  
Untitled  

**Source and Sink**  
$Q=(2\pi r)v_r$  
$v_r=\frac{Q}{2\pi r}$  
*where *$Q$* is volume flow rate per unit length  
and *$r$* is the radial distance from the source*  

$\psi=\frac{Q}{2\pi}\cdot\theta$  
$\phi=\frac{Q}{2\pi}\ ln(r)$  
$v_r =\frac1r\frac{\partial\psi}{\partial\theta} =\frac{\partial\phi}{\partial r} =\frac{Q}{2\pi r}$  
Untitled  

**Vortex**  
$v_\theta= -\frac{\partial\psi}{\partial r} =\frac1r\frac{\partial\phi}{\partial r} =\frac{\Gamma}{2\pi r}$  
*where the constant *$K=\frac{\Gamma}{2\pi}$  

$\psi=-\frac{\Gamma}{2\pi}\ ln(r)$  
$\phi=\frac{\Gamma}{2\pi}\ \theta$  
Untitled  

**Doublet**  
For a souce-sink pair:  
$ \psi=-\frac{Qarsin\theta}{\pi(r^2-a^2)}$  
*where *$a$* is the half-distance   
between source and sink*  

For small values of $a$ — doublet:  
$\psi=-\frac{Ksin\theta}{r}$  
$\phi=\frac{Kcos\theta}{r}$  
*where *$r$* is the radius from the center of   
the doublet, with the constant *$K=\frac{Qa}{\pi}$  
Untitled  
Untitled  

### Superposition of Basic Flows

#### Rankine Half-Body (Source in Uniform Flow)

Untitled  

$\psi=Ursin\theta +\frac{Q}{2\pi}\cdot\theta$  
$\phi=Urcos\theta +\frac{Q}{2\pi}\ ln(r)$  
*Note that *$x=rcos\theta$* and *$y=rsin\theta$*.*  

$v_r=Ucos\theta+\frac{Q}{2\pi r}$  
$v_\theta=-Usin\theta$  

Distance between stagnation point and source:  
$b=\frac{Q}{2\pi U}$  

Streamline on which stagnation point is located on:  
$\psi_{stagnation}=\frac{Q}{2} =\pi bU$  

Boundary of the half-body:  
$r=\frac{b(\pi-\theta)}{sin\theta}$  
*Note that the boundary of the half-body is essentially the   
streamline on which the stagnation point is located on.*  

Since $r=sin\theta$, the half-width of the body:  
$y=b(\pi-\theta)$  

As $x$ approaches infinity, the half-width becomes:  
$y=\pm b\pi$  
*The angle *$\theta$* of the boundary, with respect to the *$x$*-axis, tends towards zero.*  

Velocity at any point in the flow:  
$V^2=U^2+\frac{UQcos\theta}{\pi r} +\Big(\frac{Q}{2\pi r}\Big)^2$  
$V^2=U^2\Big(1 +\frac{2bcos\theta}{r} +\frac{b^2}{r^2}\Big)$  
*We can make use of Bernoulli’s equation to determine the pressure at any point.*  

#### Rankine Oval (Source and Sink in Uniform Flow)

Untitled  

$\psi=Ursin\theta -\frac{Q}{2\pi}tan^{-1} \Big(\frac{2arsin\theta} {x^2+y^2-a^2}\Big)$  
$\phi=Urcos\theta -\frac{Q}{2\pi} (ln\ r_1-ln\ r_2)$  
*Note that *$r^2=x^2+y^2$*.*  

$u=U+\frac{Q}{2\pi}\Big[ \frac{x-a}{(x-a)^2+y^2} -\frac{x+a}{(x+a)^2+y^2} \Big]$  
$v=-\frac{Q}{2\pi}\Big[ \frac{y}{(x-a)^2+y^2} -\frac{y}{(x+a)^2+y^2} \Big]$  

Half-length of the body:  
$l=\sqrt{\frac{Qa}{\pi U}+a^2}$  
$\frac la= \sqrt{\frac{Q}{\pi Ua}+1}$  

Half-width of the body:  
$h=\frac{h^2-a^2}{2a}\  tan\frac{2\pi Uh}{Q}$  
$\frac ha=\frac12\bigg[ \Big(\frac ha\Big)^2-1\bigg] tan\bigg[ 2\Big(\frac{\pi Ua}{Q}\Big) \frac ha\bigg]$  

#### Flow around Cylinder (Doublet in Uniform Flow)

Untitled  

$ \psi=Ur{sin\theta} \Big(1-\frac{a^2}{r^2}\Big)$  
$ \phi=Ur{cos\theta} \Big(1+\frac{a^2}{r^2}\Big)$  

$v_r=U{cos\theta}\Big(1 -\frac{a^2}{r^2}\Big)$  
$v_\theta=-U{sin\theta}\Big(1 +\frac{a^2}{r^2}\Big)$  

At the boundary of the body where $r=a$:  
$v_r=0$  
$v_\theta=-2Usin\theta$  
*We can make use of Bernoulli’s equation to determine pressure   
at any point along the boundary of the Rankine oval.*  

#### Rotating Cylinder (Free Vortex and Cylinder)

Untitled  

$\psi=Ur\Big(1-\frac{a^2}{r^2} \Big)sin\theta -\frac{\Gamma}{2\pi}\ ln(r)$  
$\phi=Ur\Big(1+\frac{a^2}{r^2} \Big)cos\theta +\frac{\Gamma}{2\pi}\ \theta$  
*where *$\Gamma$* is the circulation of the free vortex*  

$v_r=Ucos\theta\Big( 1-\frac{a^2}{r^2}\Big)$  
$ v_\theta=-Usin\theta\Big( 1+\frac{a^2}{r^2}\Big) +\frac{\Gamma}{2\pi r}$  

Tangential velocity on the surface:  
$v_{\theta s} =-\frac{\partial\psi} {\partial r}|_{r=a} =-2Usin\theta +\frac{\Gamma}{2\pi a}$  

Location of stagnation points:  
$ sin\theta_{stagnation} =\frac{\Gamma}{4\pi Ua}$  
*where *$v_{\theta s}=0$  
Untitled  

## Airfoil Characteristics

### NACA 4-Digit Series

- 1st digit specifies the maximum camber in % of chord
- 2nd digit $\times 10$ specifies position of maximum camber from leading edge in % of chord
- Last two digits specifies maximum thickness of the airfoil in % of chord

*The NACA 2415 airfoil has a maximum camber of 2% chord length, which is located 40%   
of chord length from the airfoil leading edge, and has a maximum thickness of 15%.*  

---

### NACA 5-Digit Series

- 1st digit $\times 0.15$ specifies the design lift coefficient
- 2nd and 3rd digits $\times 0.5$ specifies position of maximum camber in % of chord
- 4th and 5th digits specifies position of maximum thickness in % of chord

*The NACA 23012 airfoil has a design lift coefficient of 0.3, a maximum camber located   
15% of chord length from the airfoil leading edge, and a maximum thickness of 12%.*  

---

### NACA 6-Digit Series

- 1st digit denotes the series and indicates this is designed for greater laminar flow
- 2nd digit $\times 10$ specifies position of minimum pressure in % of chord
- 3rd digit $\times0.1$ specifies the acceptable range of $C_l$ for low drag performance
- 4th digit $\times 0.1$ specifies the design lift coefficient
- Last two digits specifies position of maximum thickness in % of chord

*The NACA 632-315 airfoil has a minimum pressure located 30% of chord length from the   
leading edge, has a 0.3 design lift coefficient, *$\pm$*0.2 of design lift coefficient for low drag performance, and maximum thickness located 15% of chord length.*  

## Thin Airfoil Theory

### Kutta-Joukowski Theorem

$L'=\rho_\infin U_\infin\Gamma$  
*where *$L'$* is lift per unit span*  

---

### Symmetric Airfoil

**Lift Coefficient**  
$L'=\pi\alpha c \rho_\infin{U_\infin}^2$  
$C_l=2\pi\alpha$  
$\frac{dC_l}{d\alpha}=2\pi/rad =0.11/degree$  
**Moment Coefficient**  
$M'_{LE}=-\Big(\frac12\rho_\infin {U_\infin}^2\Big) c^2\frac{\pi\alpha}2$  
$C_{m_{LE}}=-\frac{\pi\alpha}2$  
$C_{m_{c/4}}=0$  

---

### Cambered Airfoil

$A_0=\alpha-\frac1\pi\int^\pi_0 \frac{dz}{dx}\ d\theta$  
$A_n=\frac2\pi\int^\pi_0 \frac{dz}{dx}cos(n\theta) \ d\theta$  
*where *$\frac{dz}{dx}$* is the camber of the airfoil*  

**Variable Transformation Equation**  
$\frac xc=\frac12(1-cos\theta)$  
*where *$\theta$* corresponds to a location along the chord (at trailing edge, *$\theta=\pi$*)*  

**Lift Coefficient**  
$L'=\rho_\infin{U_\infin}^2c \Big(\pi A_0+\frac\pi2A_1\Big)$  
$C_l=\pi(2A_0+A_1)$  
$\frac{dC_l}{d\alpha} =2\pi/rad =0.11/degree$  
**Moment Coefficient**  
$C_{m_{LE}}=-\frac\pi2\Big( A_0+A_1-\frac{A_2}2\Big)$  
$C_{m_{LE}}=-\Big[\frac{C_l}4 +\frac\pi4(A_1-A_2)\Big]$  
$C_{m_{c/4}}=\frac\pi4(A_2-A_1)$  
**Zero-Lift Angle**  
$\alpha_{L=0}= -\frac12A_1+(\alpha-A_0)$  
**Center of Pressure Location**  
$x_{cp}=\frac c4\Big[1+ \frac\pi{C_l}(A_1-A_2)\Big]$  

## Lifting Line Theory

### Geometric Angle of Attack

$\alpha=\alpha_{eff}+\alpha_i$  
$\alpha_i ={tan^{-1}}\frac{-w}{U_\infin}$  
*where *$w$* is the downwash velocity (negative indicates downwards velocity)*  

---

### Elliptical Lift Distribution

**Downwash Velocity**  
$w_y=-\frac{\Gamma_0}{2b}$  
*whereby *$\Gamma_0$* is the circulation at the center span of the wing (plane of symmetry)*  

**Lift Coefficient**  
Lift as given by Kutta-Joukowski theorem:  
$L=\rho_\infin U_\infin\Gamma_0 \cdot\frac{b}{4}\pi$  

Expressing $C_L$ and $\Gamma_0$ in other terms:  
$C_L =\frac{\Gamma_0b\pi}{2U_\infin S}$  
$\Gamma_0 =\frac{2U_\infin SC_L}{b\pi}$  

**Induced Angle of Attack**  
$\alpha_i =\frac{\Gamma_0}{2bU_\infin}$  
$\alpha_i=\frac{C_L}{\pi AR}$  

**Induced Drag Coefficient**  
$C_{D_i}=\frac{{C_L}^2}{\pi AR}$  
**Lift-to-Drag Ratio**  
$C_D=C_{D_0}+k{C_L}^2$  
*where *$k=\frac1{\pi AR}$  

To achieve maximum ratio:  
$C_{D_0}=k{C_L}^2$  

Expression for maximum ratio:  
$\frac{L}{D}_{max} =\sqrt{\frac1{4kC_{D_0}}}$  

---

### General Lift Distribution

**Monoplane Equation**  
$\mu(\alpha-\alpha_{L=0})sin\phi =\sum A_nsin(n\phi)\cdot (\mu n+sin\phi)$  
*where *$\mu=\frac{ca_0}{8(b/2)}$* and *$a_0$* is the lift curve slope of an airfoil*  

**Lift Coefficient**  
$L=4\Big(\frac b2\Big)^2 \Big(\frac12\rho_\infin {U_\infin}^2\Big)A_1\pi$  
$C_L=A_1\pi AR$  
**Induced Drag Coefficient**  
$D_i=2\pi\Big(\frac{b}2\Big)^2 \rho_\infin{U_\infin}^2 \sum n{A_n}^2$  
$C_{D_1}=\frac{{C_L}^2}{\pi eAR}$  
$\alpha_i=\frac{C_L}{\pi eAR}$  
*where *$e=\frac1{1+\delta}$  

---

### Lift Curve Slope of a Wing

For a wing with an elliptical lift distribution:  
$a=\frac{dC_L}{d\alpha}=\frac{a_0} {1+\frac{a_0}{\pi AR}}$  
For a wing of arbitrary planform:  
$a=\frac{dC_L}{d\alpha}=\frac{a_0} {1+\frac{a_0}{\pi eAR}}$  

## Shockwaves

### Isentropic Flow Properties

For a given Mach number, the ratios are:  
$\frac{p_0}{p} =\Big[1+\frac12(\gamma-1)M^2\Big] ^{\frac{\gamma}{\gamma-1}}$  
$\frac{\rho_0}{\rho} =\Big[1+\frac12(\gamma-1)M^2\Big] ^{\frac1{\gamma-1}}$  
$\frac{T_0}{T} =1+\frac12(\gamma-1)M^2$  

---

### Normal Shock Properties

For a given Mach number, the ratios are:  
$\frac{p_2}{p_1} =1+\frac{2\gamma}{\gamma+1} ({M_1}^2-1)$  
$\frac{\rho_2}{\rho_1} =\frac{(\gamma+1){M_1}^2} {2+(\gamma-1){M_1}^2}$  
$\frac{T_2}{T_1} =\Big[1+\frac{2\gamma}{\gamma+1}({M_1}^2-1)\Big]\Big[ \frac{2+(\gamma-1){M_1}^2} {(\gamma+1){M_1}^2} \Big]$  

Upstream Mach number is:  
${M_2}^2 =\frac{1+\frac12(\gamma-1){M_1}^2}{\gamma{M_1}^2-\frac12(\gamma-1)}$  

Entropy change across shockwave is:  
$\Delta s =c_p\ ln \bigg\{ \Big[ 1+\frac{2\gamma}{\gamma+1}({M_1}^2-1) \Big] \Big[ \frac{2+(\gamma-1){M_1}^2} {(\gamma+1){M_1}^2} \Big] \bigg\}\\ \ \ \ \ \ \ \ \ \ \ \  -R\ ln \Big[ 1+\frac{2\gamma}{\gamma+1} ({M_1}^2-1) \Big]$  

---

### Prandtl-Meyer Function

Solving for properties across an oblique shock:  
- Determine deflection angle $\theta$, which is with respect to the upstream flow direction
- Determine shockwave angle $\beta$ from $\theta$-$\beta$-$M$ diagram (weak or strong shock angle)
- Compute normal component of upstream Mach number using $M_{1n}=M_1sin\beta$
- Obtain properties corresponding to $M_{1n}$ from “Normal Shock Properties” table
- Compute the downstream Mach number $M_2$ using $M_2=\frac{M_{2n}} {sin(\beta-\theta)}$

*Note that for oblique shockwaves, the properties depend only on the normal component   
of the upstream Mach number. Thus, the downstream Mach number computed using the   
normal shock properties is the normal component of the actual Mach number.*  

Solving for properties across an expansion wave:  
- Determine deflection angle $\theta$, which is with respect to the upstream flow direction
- For the given $M_1$, obtain $\nu(M_1)$ and $\mu_1$ from the “Prandtl-Meyer Function” table
- Compute $\nu(M_2)$ using the Prandtl-Meyer equation $\theta=\nu(M_2)-\nu(M_1)$
- Obtain properties corresponding to $\nu(M_2)$ from “Isentropic Flow Properties” table
- Compute the properties downstream of the expansion wave

*Note that expansion waves are isentropic, thus, *$p_{0_1}=p_{0_2}$*, *$\rho_{0_1}=\rho_{0_2}$*, and *$T_{0_1}=T_{0_2}$*.*  

## Subsonic Compressible Flow

### Linearized Pressure Coefficient

$C_p=\frac2{\gamma{M_\infin}^2} \Big(\frac{p}{p_\infin}-1\Big)$  
*The above equation is valid for both subsonic and supersonic flows.*  

---

### Compressibility Corrections

Prandtl-Glauert correction:  
$C_p=\frac{C_{p_0}} {\sqrt{1-{M_\infin}^2}}$  
$C_l=\frac{C_{l_0}} {\sqrt{1-{M_\infin}^2}}$  
$C_m=\frac{C_{m_0}} {\sqrt{1-{M_\infin}^2}}$  
*where *$C_{p_0}$* is the pressure coefficient under incompressible flow conditions and   
*$C_p$* is the predicted pressure coefficient under compressible flow conditions*  

Karmen-Tsien correction:  
$C_p=\frac{C_{p_0}} {\sqrt{1-{M_\infin}^2} +\frac{C_{p_0}}2\Big( \frac{{M_\infin}^2} {1+\sqrt{1-{M_\infin}^2}}\Big)}$  

Laitone correction:  
$C_p=\frac{C_{p_0}} {\sqrt{1-{M_\infin}^2} +C_{p_0}\cdot \frac{{M_\infin}^2\big[ 1+\frac12(\gamma-1){M_\infin}^2 \big]}{2\sqrt{1-{M_\infin}^2}}}$  

---

### Critical Mach Number

Pressure coefficient at any point in the flow:  
$C_{p_A}=\frac2{\gamma{M_\infin}^2} \Bigg\{\bigg[ \frac{1+\frac12(\gamma-1){M_\infin}^2} {1+\frac12(\gamma-1) {M_A}^2}\bigg] ^{\frac{\gamma}{\gamma-1}}-1 \Bigg\}$  

Pressure coefficient at the point where $M_A=1$:  
$C_{p_{cr}} =\frac2{\gamma{M_{cr}}^2} \Bigg\{\bigg[ \frac{1+\frac12(\gamma-1){M_{cr}}^2} {1+\frac12(\gamma-1)}\bigg] ^{\frac{\gamma}{\gamma-1}}-1 \Bigg\}$  
*When freestream Mach number reaches the critical Mach number, there will be a point in the   
flow whereby the local Mach number is sonic. Thus, the pressure coefficient at that point is   
the critical pressure coefficient (minimum pressure coefficient).*  

## Linearized Supersonic Flow

### Linear Theory

$C_p=\frac{2\theta}{\sqrt{{M_\infin}^2-1}}$  
*Note that *$\theta$* is positive when measured in   
the anticlockwise direction and vice versa.*  

$C_l=\frac{4\alpha} {\sqrt{{M_\infin}^2-1}}$  
$C_d=\frac{4\alpha^2} {\sqrt{{M_\infin}^2-1}}$  
*Note that angle of attack *$\alpha$* is expressed in radians.*  

---

### Second-Order Theory

$C_p=\frac{2\theta} {\sqrt{{M_\infin}^2-1}} +\Big[\frac{(\gamma+1) {M_\infin}^4-4{M_\infin}^2+4} {{2({M_\infin}^2-1)^2}} \Big]\theta^2$  
$C_p={a\theta+b\theta^2}$  
*where *$a$* and *$b$* are constants*  
