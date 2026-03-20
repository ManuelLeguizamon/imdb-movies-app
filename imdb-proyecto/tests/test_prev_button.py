import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

#--------------------------------------

driver = webdriver.Chrome()
driver.get("https://ml-imdb.vercel.app/")
time.sleep(1)

buttons = driver.find_elements(By.CLASS_NAME, "btn")
prevButton = buttons[0]


for i in range(100):
    # Forzar click
    driver.execute_script("arguments[0].click();", prevButton)
    
# VALIDACIÓNES

    #Validar que cargue 3 puntos de la lista de paginas
    page_text = driver.find_element(By.XPATH, "//span").text
    if "Page 25 of 100" in page_text:
        print("Pagina 25 cargada correctamente")
    elif "Page 75 of 100" in page_text:
        print("Pagina 75 cargada correctamente")
    elif "Page 99 of 100" in page_text:
        print("Pagina 99 cargada correctamente")
    else:
        pass

    #Validar que el numero de la pagina este en el rango esperado
    current_page = int(page_text.split()[1])
    assert 0 < current_page < 101

print("\nTest ""Previous Buttom"" Finalizado")


#------------------------------------------
input("Enter para cerrar")
driver.quit()
